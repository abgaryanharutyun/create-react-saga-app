const shell = require('shelljs');

const args = process.argv.slice(2);

if (!args[0]){
  console.log('Please provide app name like this `create-react-saga-app MY_APP_NAME`');
  process.exit();
}
const appName = args[0];

// installing necessary packages
require('./bin/install-packages')(appName);

//creating folder
require('./bin/create-folder-structure')(appName);






