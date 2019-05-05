module.exports = {
  getLouder: loader => {
    switch (loader) {
      case 'css':
        return {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        };
      default:
        return null;
    }
  },
};
