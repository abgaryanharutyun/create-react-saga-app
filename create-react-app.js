#!/usr/bin/env node
const args = process.argv.slice(2);

if (!args[0]) {
  console.log('Please provide command type');
  process.exit();
}

const command = args[0];
require('./src/handlers/handle-command')(command);





