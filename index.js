const print = str => console.log(str);
const fs = require('fs');
const fsp = require('fs').promises;
const time = new Date();
// const promises = require('promise')
// const fsp = require("fs/promises");
// const map = require('async');

const file = './file';
const txt = time;

// fs.unlinkSync(file);
const cb = (err, msg) => {
  if (err) {
    print(err);
    return;
  }
  print(msg);
};

const writeToFile = (dest, txt) => {
  fs.writeFile(dest, txt, cb);
}

const readFile =  (file) => {
  fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
      cb(error, null);
      return
    }
    cb(null, data);
  });
};

writeToFile(file, txt);
print('stop')
// readFile(file);

const readFileP = (file) => {
  return fsp.readFile(file, 'utf-8')
  .then(content => print(content))
}

readFileP(file);