// //* Output should paste every name that passes
// //* Starts with a Mr. Mrs. Ms. Dr. or Er.
// //* Has a space after part 1
// //* Ends with word that start with a capital and has 0 or more lowecase after

// const re = /(M[rs]|[DE]r|Mrs). [A-Z][a-z]*/;
const { readFileSync, writeFileSync } = require('fs');

const input = readFileSync('./encoded.txt', 'utf-8');
let answers = '';
let text = '';
let match;

//! Number 1
let str = '@Den3ver';
const re1 = /\@([A-Za-z]+)/g;
match = re1.exec(input);
console.log(match);
let dif = 0;
while (match) {
  console.log(match[1]);
  answers += `${match[1]}`;
  if ((answers.length - dif) % 18 == 0) {
    answers += `\n`;
    dif += 1;
  }
  match = re1.exec(input);
}

text += answers;

//! Number 2

let coords = {
  deg: [],
  single: [],
  period: [],
  dir: [],
};

//* degrees
console.log('Degrees:\n');
const degree = /([0-9])[A-Za-z]{3,}([0-9])[A-Za-z]{3,}([0-9])[A-Za-z]{3,}°/g;
match = degree.exec(input);
answers += 'Degrees:\n';

while (match) {
  let answer = `${match[1]}${match[2]}${match[3]}`;
  answer = Number(answer);
  if (answer <= 255 && answer > 0) {
    answers += `${match[1]}${match[2]}${match[3]}°\n`;
    coords['deg'].push(`${match[1]}${match[2]}${match[3]}°`);
    // console.log(match[0]);
  }
  match = degree.exec(input);
}

//* single quotes
const single = /(\d)[A-Za-z]{3,}(\d)[A-Za-z]{3,}\'/g;
match = single.exec(input);
answers += 'Single Quotes:\n';

while (match) {
  let answer = `${match[1]}${match[2]}`;
  answer = Number(answer);

  if (answer <= 63 && answer > 0) {
    answers += String(answer) + '\n';
    coords['single'].push(String(answer));
  }
  match = single.exec(input);
}

//* period
const period = /(\d)[A-Za-z]{3,}(\d)[A-Za-z]{3,}\./g;

match = period.exec(input);
answers += 'Period:\n';

while (match) {
  let answer = `${match[1]}${match[2]}`;
  answer = Number(answer);

  if (answer <= 63 && answer > 0) {
    console.log(match[0]);
    answers += String(answer) + '\n';
    coords['period'].push(String(answer));
  }
  match = period.exec(input);
}
console.log(answers);

//* Direction
const direction = /([\d])[A-Za-z]{3,}\"[a-z]*([NESW])/g;
match = direction.exec(input);
answers += 'Direction:\n';

while (match) {
  let answer = `${match[1]}`;
  answer = Number(answer);

  if (answer <= 7 && answer > 0) {
    console.log(match[0]);
    answers += String(answer) + '"' + match[2] + '\n';
    coords['dir'].push(String(answer) + '"' + match[2]);
  }
  match = direction.exec(input);
}
console.log(answers);

text += `\n${coords['deg'][0]}${coords['single'][0]}'${coords['period'][0]}.${coords['dir'][0]}\n${coords['deg'][1]}${coords['single'][1]}'${coords['period'][1]}.${coords['dir'][1]}\n`;

//! Number 3
const murder = /\[([\w.]+)\s|\s([\w.]+)\]/g;

let bracketMatch = murder.exec(input);
let message = '';

while (bracketMatch) {
  let tempText = `${bracketMatch[1] || bracketMatch[2]}`;

  tempText = tempText
    .split('')
    .filter((char) => isNaN(char))
    .join('');

  if (!tempText) {
    bracketMatch = murder.exec(input);
    continue;
  }
  message += `${tempText} `;
  console.log(tempText);
  bracketMatch = murder.exec(input);
}
text += `\n${message}`;
console.log(message);

writeFileSync('./answers.txt', text);
