
const shell = require('shelljs');
const packages = [
  'reselect',
  'redux-saga',
  'redux',
  'react-router-dom',
  'deepmerge',
  'redux-devtools-extension',
  'axios',
  'bluebird'
];
module.exports = function (appName) {
  const necessaryPackages = packages.join(' ');
  shell.exec(`cd ./${appName} && yarn add ${necessaryPackages}`);
}
