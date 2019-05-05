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
  urlLoader: {
    test: /\.png$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 30000,
          name: 'assets/images/[name].[ext]',
        },
      },
    ],
  },
  fonts: {
    test: /\.ttf$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
};
