const path = require('path');
console.log(path.sep);

//! Joins all of the strings into a nice file path
const filePath = path.join('./content/', 'subfolder', 'test.txt');
console.log(filePath);

//! Last thing in the path name
const base = path.basename(filePath);
console.log(base);

//! The __dirname add the rest of the path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
