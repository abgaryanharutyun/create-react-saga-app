module.exports = function(configuration) {
  require('./commands/create-app')(configuration);

  // installing necessary packages
  require('./commands/install-packages')(configuration);

  //creating folder
  require('./commands/create-folder-structure')(configuration);

  //sync initial template
  require('./commands/sync-template')(configuration);
};