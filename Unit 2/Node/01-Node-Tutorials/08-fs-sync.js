const { readFileSync, writeFileSync } = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const result = readFileSync('./content/sync-result.txt', 'utf8');

writeFileSync(
  './content/sync-result.txt',
  `Here is the results ${first},\n${second}\n`,
  { flag: '' }
);

console.log(second);
console.log('finished');
console.log(first);
console.log(result);
