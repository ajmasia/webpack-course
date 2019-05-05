const path = require('path');

module.exports = {
  getOutputFile: name => ({
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `${name}.js`,
    },
  }),
};
