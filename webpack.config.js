const path = require('path');
const { getRules } = require('./config/webpack.parts');

const devLoaders = ['css', 'sass', 'less', 'urlLoader'];
const prodLoaders = ['css', 'sass', 'less'];

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
