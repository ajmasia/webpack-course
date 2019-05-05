const path = require('path');
const { getRules } = require('./config/webpack.parts');

const devLoaders = ['css', 'sass', 'less', 'images', 'fonts', 'videos'];
const prodLoaders = ['css', 'sass', 'less', 'images', 'fonts', 'videos'];

module.exports = env => {
  const rules =
    env.NODE_ENV === 'production'
      ? getRules(prodLoaders)
      : getRules(devLoaders);

  return {
    mode: env.NODE_ENV,
    entry: path.resolve(__dirname, 'src', 'entry.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules,
    },
  };
};
