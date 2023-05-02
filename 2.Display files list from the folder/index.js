//Creating a text file
// const fs = require('fs');
// fs.writeFileSync('apple.txt', 'This is the apple file');

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath);

// for (i = 0; i < 10; i++) {
//   fs.writeFileSync(
//     dirPath + `/Hello ${i}.txt`,
//     `This is a simple text file ${i}`
//   );
// }

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

console.log(dirPath);

// Creating a 10 files in a directory

// for (i = 0; i < 10; i++) {
//   fs.writeFileSync(dirPath + `/Hello${i}.txt`, `A simple text file ${i}`);
// }

// Reading a file
// fs.readdir(dirPath, (err, files) => {
//   console.log(files);
// });

fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log(`The file name is ${item}`);
  });
});
