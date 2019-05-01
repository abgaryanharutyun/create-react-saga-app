const shell = require('shelljs');
module.exports = function(appName) {
  shell.exec(`create-react-app ${appName}`);
}

