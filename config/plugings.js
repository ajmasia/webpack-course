const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  clean: new CleanWebpackPlugin(),
  html: new HtmlWebpackPlugin({
    template: path.join('./src', 'index.html'),
    filename: './index.html',
  }),
};
