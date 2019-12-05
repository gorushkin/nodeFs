const print = str => console.log(str);
const fs = require('fs');
// const map = require('async');

const file = './file';
const txt = 'qwerty';

fs.unlinkSync(file);

const writeToFile = (dest, txt) => {
  fs.writeFile(dest, txt, (err) => {
    if (err) {
      print(err);
      return
    }
    print('job is done');
  });
}

// writeToFile(file, txt);
print('stop')