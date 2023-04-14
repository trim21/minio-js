import * as fs from 'node:fs'

import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import externals from 'rollup-plugin-node-externals'
import execute from 'rollup-plugin-shell'

const pkg = JSON.parse(fs.readFileSync('package.json').toString())

export default {
  input: pkg.source,
  plugins: [
    nodeResolve({ extensions: ['.mjs', '.js', '.ts', '.mts', '.json', '.node'] }),
    getBabelOutputPlugin({
      presets: [['@babel/env', { targets: { node: '9' }, modules: false }]],
    }),
    externals({ builtinsPrefix: 'strip' }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.mts', '.ts'],
    }),
    replace({
      'process.env.MINIO_JS_PACKAGE_VERSION': JSON.stringify(pkg.version),
      preventAssignment: true,
    }),
    // babel doesn't perform type checking
    // also emit type definition
    execute({ commands: ['npm run tsc'], hook: 'buildEnd' }),
  ],
  output: [
    // ES module (for bundlers) build.
    {
      format: 'esm',
      file: pkg.module,
      sourcemap: true,
      sourcemapExcludeSources: false,
    },
    // CommonJS (for Node) build.
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true,
      sourcemapExcludeSources: false,
    },
  ],
}
