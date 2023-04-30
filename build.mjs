import { execSync } from 'node:child_process'
import * as fs from 'node:fs'
import * as fsp from 'node:fs/promises'
import * as path from 'node:path'
import { promisify } from 'node:util'

import * as babel from '@babel/core'
import * as fsWalk from '@nodelib/fs.walk'
import mkdirp from 'mkdirp'

const mkdir = promisify(mkdirp)
const pkg = JSON.parse(fs.readFileSync('package.json').toString())

/**
 * @param {'esm'|'cjs'} module
 */
function options(module) {
  return {
    sourceMaps: 'inline',
    plugins: [
      ['@upleveled/remove-node-prefix'],
      [
        'replace-import-extension',
        {
          extMapping: {
            '.ts': extMap[module],
            '.js': extMap[module],
          },
        },
      ],
      [
        'babel-plugin-transform-replace-expressions',
        {
          replace: {
            'process.env.MINIO_JS_PACKAGE_VERSION': JSON.stringify(pkg.version),
          },
        },
      ],
    ],
    presets: [
      ['@babel/env', { targets: { node: '8' }, modules: module === 'esm' ? false : module }],
      ['@babel/preset-typescript'],
    ],
  }
}

const extMap = { cjs: '.js', esm: '.mjs' }

async function buildFiles({ files, module, outDir }) {
  console.log(`building for ${module}`)
  const opt = options(module)
  for (const file of files) {
    if (file.path.endsWith('.d.ts')) {
      if (module === 'cjs') {
        fs.copyFileSync(file.path, path.join(outDir, path.relative('src/', file.path)))
      }
      continue
    }

    try {
      const result = await babel.transformAsync(fs.readFileSync(file.path).toString(), {
        filename: file.path,
        ...opt,
      })

      const outPath = path.join(outDir, path.relative('src/', file.path)).replace(/\.[tj]s/g, extMap[module])
      await mkdir(path.dirname(outPath))
      fs.writeFileSync(outPath, result.code)
    } catch (e) {
      console.error(`failed to transpile ${file.path}`)
      throw e
    }
  }
}

async function main() {
  await fsp.rm('dist', { recursive: true, force: true })

  console.log('tsc')
  execSync(`npx tsc --outDir ./dist/main/`, { stdio: 'inherit' })

  const entries = fsWalk.walkSync('src/')
  await buildFiles({
    files: entries,
    module: 'cjs',
    outDir: './dist/main/',
  })

  await buildFiles({
    files: entries,
    module: 'esm',
    outDir: './dist/esm/',
  })
}

main().catch((e) => {
  throw e
})
