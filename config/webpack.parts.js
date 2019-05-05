const loaders = require('./loaders');
const plugings = require('./plugings');

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
  getPlugings: tasks => {
    if (tasks.length > 0) {
      const selectedPlugings = tasks.map(task => {
        const testPlugin = Object.prototype.hasOwnProperty.call(plugings, task);
        if (testPlugin) {
          return plugings[task];
        }
      });
      return selectedPlugings;
    }
  },
};
