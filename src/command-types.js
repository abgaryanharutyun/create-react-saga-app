const commandType = {
  new: 'new'
};

module.exports = {
  isNewApp: (command) => commandType.new === command.toLowerCase()
};