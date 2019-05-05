const path = require('path');

module.exports = env => ({
  mode: env.NODE_ENV,
  entry: path.resolve(__dirname, 'src', 'entry.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
});
