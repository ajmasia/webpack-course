const path = require('path');
const { getRules, getPlugings } = require('./config/webpack.parts');

const devLoaders = ['css', 'sass', 'less', 'images', 'fonts', 'videos'];
const prodLoaders = ['css', 'sass', 'less', 'images', 'fonts', 'videos'];

const devPlugings = ['clean', 'html'];
const prodPlugings = ['clean', 'html'];

module.exports = env => {
  const rules =
    env.NODE_ENV === 'production'
      ? getRules(prodLoaders)
      : getRules(devLoaders);
  const plugins =
    env.NODE_ENV === 'production'
      ? getPlugings(prodPlugings)
      : getPlugings(devPlugings);

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
    plugins,
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      hotOnly: true,
      overlay: true,
      port: 3000,
      host: '0.0.0.0',
    },
  };
};
