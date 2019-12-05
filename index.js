const print = str => console.log(str);
const fs = require('fs');
const time = new Date();
// const map = require('async');

const file = './file';
const txt = time;

// fs.unlinkSync(file);
const cb = (err, msg) => print(msg);

const writeToFile = (dest, txt) => {
  fs.writeFile(dest, txt, (err) => {
    if (err) {
      cb(err, null);
      return
    }
    cb(null, 'job is done');
  });
}

// const writeToFile = (dest, txt) => {
//   fs.writeFile(dest, txt, cb);
// }

const readFile =  (file) => {
  fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
      cb(error, null);
      return
    }
    cb(null, data);
  });
};

// writeToFile(file, txt);
print('stop')
readFile(file);
