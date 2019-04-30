
const shell = require('shelljs');
const packages = [
  'reselect',
  'redux-saga',
  'redux',
  'react-router-dom',
  'deepmerge'
];
module.exports = function (appName) {
  shell.exec(`./create-react-app.sh ${appName}`);
  const necessaryPackages = packages.join(' ');
  shell.exec(`cd ./${appName} && yarn add ${necessaryPackages}`);
  
}
