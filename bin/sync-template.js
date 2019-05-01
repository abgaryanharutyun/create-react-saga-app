var copydir = require('copy-dir');

module.exports = function(appName) {
  copydir.sync('./templates/initial-app', `./${appName}/src`);
}
