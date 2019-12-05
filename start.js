const fs = require("fs");
const promises = require('fs').promises;

// fs.writeFile("./test.js", "console.log('Hello world');", error => {
//     if (error) console.error(error);
//     else console.log("file created successfully!");
// });

const reverse = (src) => promises.readFile(src, 'utf-8')
  .then((content) => content.split('\n').reverse().join('\n'))
  .then((content) => promises.writeFile(src, content));

reverse('./txt');