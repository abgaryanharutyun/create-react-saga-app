var readline = require('readline');

module.exports = {
  question: async function (question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return await (new Promise(function (res) {
      rl.question(`${question}(y/n)`, function (answer) {
        rl.close();
        if (answer === 'y' || answer === 'yes') {
          return res(true);
        }
        return res(false);
      });
    }));
  }
};