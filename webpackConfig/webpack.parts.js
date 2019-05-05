const path = require('path');

module.exports = {
  getOutputFile: name => ({
    path: path.resolve(__dirname, 'dist'),
    filename: `${name}.js`,
  }),
};
