
const shell = require('shelljs');

module.exports = function ({ appName, executedPlace, isAuth }) {
  const packages = [
    'reselect',
    'redux-saga',
    'redux',
    'react-router-dom',
    'deepmerge',
    'redux-devtools-extension',
    'axios',
    'bluebird',
    'react-redux'
  ];

  if (isAuth) {
    packages.push('redux-auth-wrapper');
  }
  const necessaryPackages = packages.join(' ');
  shell.exec(`cd ${executedPlace}/${appName} && yarn add ${necessaryPackages}`);
};
