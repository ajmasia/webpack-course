const path = require('path');
const getOutput = require('./webpack.parts');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: getOutput('dev'),
};
