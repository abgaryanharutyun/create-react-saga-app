#!/usr/bin/env node
const args = process.argv.slice(2);

const executedPlace = process.cwd();
if (!args[0]){
  console.log('Please provide app name like this `create-react-saga-app MY_APP_NAME`');
  process.exit();
}
const appName = args[0];

//create react app

require('./bin/create-app')(appName);

// installing necessary packages
require('./bin/install-packages')(appName, executedPlace);

//creating folder
require('./bin/create-folder-structure')(appName, executedPlace);

//sync initial template
require('./bin/sync-template')(appName, executedPlace);






