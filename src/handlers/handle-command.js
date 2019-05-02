const commandTypes = require('../command-types');
const {argv} = process;
module.exports = function(command) {

  if (commandTypes.isNewApp(command)) {
    const [ appName ] = argv.slice(3);
    const executedPlace = process.cwd();
    require('../create-app')({
      appName,
      executedPlace
    });
  }
  
};