module.exports = {
  spec: 'src/test/**/*.js',
  exit: true,
  reporter: 'spec',
  ui: 'bdd',
  require: ['dotenv/config', 'source-map-support/register', './src/test/babel-register.js'],
}
