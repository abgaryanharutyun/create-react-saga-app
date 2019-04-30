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

module.exports = function(appName){ 
  folders.map(function(folder) {
    shell.mkdir('-p', `./${appName}/src/${folder}`);
  });
}
