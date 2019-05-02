const copydir = require('copy-dir');
const rewriteTemplate = require('../utils/template-rewrite');
const moveFile = require('move-file');
const fs = require('fs-extra');

module.exports = async function({ appName, executedPlace }) {
  const installedProjectPath = `${executedPlace}/${appName}/src`;
  const templatePath = `${__dirname}/../../templates`;
  copydir.sync(
    `${templatePath}/initial-app`, 
    installedProjectPath
  );
  
  const movedFiles = [
    {
      source: `${installedProjectPath}/App.js`,
      destination: `${installedProjectPath}/components/App.js`
    },
    {
      source: `${installedProjectPath}/App.test.js`,
      destination: `${installedProjectPath}/components/App.test.js`
    },
    {
      source: `${installedProjectPath}/logo.svg`,
      destination: `${installedProjectPath}/components/logo.svg`
    },
    {
      source: `${installedProjectPath}/App.css`,
      destination: `${installedProjectPath}/components/App.css`
    },
  ];

  const pangingPromisees = movedFiles.map(item => (
    moveFile(item.source, item.destination)
  ));
  
  await Promise.all(pangingPromisees);
  await Promise.all([
    fs.copy(`${templatePath}/index.template`, `${installedProjectPath}/index.js`)
  ]);
};
