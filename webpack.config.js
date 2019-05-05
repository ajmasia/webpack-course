const path = require('path');
const { getLouder } = require('./config/webpack.parts');

module.exports = env => ({
  mode: env.NODE_ENV,
  entry: path.resolve(__dirname, 'src', 'entry.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [getLouder('css')],
  },
});
