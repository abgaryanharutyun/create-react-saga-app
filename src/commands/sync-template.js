const copydir = require('copy-dir');
const rewriteTemplate = require('../utils/template-rewrite');
const moveFile = require('move-file');
const fs = require('fs-extra');

module.exports = async function ({ appName, executedPlace, isAuth }) {
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

  if (isAuth) {
    await Promise.all([
      fs.copy(`${templatePath}/auth-components`, `${installedProjectPath}/components`),
      fs.copy(`${templatePath}/auth.template`, `${installedProjectPath}/configs/auth.js`),
      fs.copy(`${templatePath}/selectors/users.template`, `${installedProjectPath}/selectors/users.js`),
      fs.copy(`${templatePath}/AppRoutersAuth.template`, `${installedProjectPath}/components/AppRouters.js`),
      fs.copy(`${templatePath}/App.template`, `${installedProjectPath}/components/App.js`)
    ]);
  }
};
