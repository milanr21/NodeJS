const fs = require('fs');

const path = require('path');

const dirPath = path.join(__dirname, 'crud');

const filePath = `${dirPath}/apple.txt`;

//creating a text file
// fs.writeFileSync(filePath, 'This is a simple text file');

//Reading a file

// fs.readFile(filePath, 'utf8', (err, item) => {
//   console.log(item);
// });

// Update the files

// fs.appendFile(filePath, ' and the file name is apple.txt file .', (err) => {
//   if (!err) console.log('File is updated');
// });

// Renaming a file
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (!err) console.log('The file name is updated');
});

// Deleting a file
// fs.unlinkSync(`${dirPath}/fruit.txt`);
