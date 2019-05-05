const loaders = require('./loaders');

module.exports = {
  getRules: rules => {
    if (rules.length > 0) {
      const selectedRules = rules.map(loader => {
        const testLoader = Object.prototype.hasOwnProperty.call(
          loaders,
          loader
        );
        if (testLoader) {
          return loaders[loader];
        }
      });
      return selectedRules;
    }
  },
};
