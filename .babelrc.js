const buildConfig = {
  // do not add presets-env here, building output target is configured in rollup config
  presets: [['@babel/preset-typescript']],
}

const inTest = process.env.NODE_ENV === 'test'

const testConfig = {
  presets: [
    ['@babel/preset-typescript', { allExtensions: true }],
    ['@babel/preset-env', { targets: { node: 'current' }, modules: 'cjs' }],
  ],
}

module.exports = inTest ? testConfig : buildConfig
