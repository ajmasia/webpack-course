module.exports = {
  css: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  sass: {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  less: {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
  },
};
