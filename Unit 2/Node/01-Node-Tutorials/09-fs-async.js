const { readFile, writeFile } = require('fs');

console.log('start');
let first, second;
//? Returns a promise with an error or a result
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    second = result;

    writeFile(
      './content/async-results.txt',
      `here is the result:\n${first}\n${second}`,
      { flag: 'w' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with task');
      }
    );
  });
});

// console.log(first);
console.log('starting next task');
// console.log(second);
