var copydir = require('copy-dir');

module.exports = function(appName, executedPlace) {
  copydir.sync(`${__dirname}/../templates/initial-app`, `${executedPlace}/${appName}/src`);
}
