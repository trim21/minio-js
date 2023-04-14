// testing env babel config is located at ./src/test/babel-register.js

// do not add presets-env here, building output target is configured in rollup config
module.exports = {
  presets: [['@babel/preset-typescript']],
}
