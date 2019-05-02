const fs = require('fs-extra');
module.exports = function (file, obj) {
  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  return new Promise((res, rej) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        Object.keys(obj).map(key => {
          data = data.toString();
          data = data.replaceAll(`{{${key}}}`, obj[key]);
        });
        fs.writeFile(file, data, err => {
          if (err) {
            console.log(err);
            rej();
          } else {
            res();
          }
        });
      }
    });
  });
};
