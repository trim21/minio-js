const buildConfig = {
  // do not add presets-env here, building output target is configured in rollup config
  presets: [['@babel/preset-typescript']],
}

const inTest = process.env.NODE_ENV === 'test'

const testConfig = {
  plugins: [
    '@upleveled/remove-node-prefix', // lower version of node (<14) doesn't support require('node:fs')
  ],
  presets: [
    ['@babel/preset-typescript', { allExtensions: true }],
    ['@babel/preset-env', { targets: { node: 'current' }, modules: 'cjs' }],
  ],
}

module.exports = inTest ? testConfig : buildConfig
