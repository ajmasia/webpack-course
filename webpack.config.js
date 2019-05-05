const path = require('path');
const { getOutputFile } = require('./webpack.parts');

module.exports = env => ({
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: getOutputFile(env.OUT_FILENAME),
});
