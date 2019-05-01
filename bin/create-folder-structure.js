const shell = require('shelljs');

const folders = [
  'actions',
  'reducers',
  'sagas',
  'selectors',
  'utils',
  'components',
  'configs',
  'constants',
  'services'
];

module.exports = function(appName, executedPlace){ 
  folders.map(function(folder) {
    shell.mkdir('-p', `${executedPlace}/${appName}/src/${folder}`);
  });
}
