const { writeFileSync } = require('fs');

for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `This is line ${i + 1}\n`, { flag: 'a' });
}
