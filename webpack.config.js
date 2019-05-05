const path = require('path');

module.exports = env => ({
  mode: env.NODE_ENV,
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
});
