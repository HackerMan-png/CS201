// const { readFile, writeFile } = require('fs');
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (error, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText('./content/first.txt')
//   .then(getText('./content/second.txt').then(writeFile('this is done')))
//   .catch((err) => console.log(err));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const {promisify} = require('util')

// const readFilePromise = promisify(readFile)
// const writeFilePromise = promisify(writeFile)

// readFilePromise('./content/first.txt')
//   .then((result) => console.log(result))
//     .catch((err) => console.log(err))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/promise-result.txt',
      `This was made with promises, I promise:\n${first} \n${second} \n\n`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
