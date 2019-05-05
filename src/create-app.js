const { question } = require('./utils/question');

module.exports = async function (configuration) {

  const isAuth = await question('Add auth wrapper?');

  require('./commands/create-app')(configuration);
  // installing necessary packages
  require('./commands/install-packages')({
    ...configuration,
    isAuth
  });

  //creating folder
  require('./commands/create-folder-structure')(configuration);

  //sync initial template
  require('./commands/sync-template')({
    ...configuration,
    isAuth
  });



};