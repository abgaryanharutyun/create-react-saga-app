
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
module.exports = function ({ appName, executedPlace }) {
  const necessaryPackages = packages.join(' ');
  shell.exec(`cd ${executedPlace}/${appName} && yarn add ${necessaryPackages}`);
};
