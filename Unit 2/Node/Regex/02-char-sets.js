const str = 'Mr. Doug';

const re = /[akx][d-m]\./g;
// 1. starts with a,k,x
// 2. next letter is d through m
// 3. ends in a .

// 1. String starts with a Mr. or Ms.
// 2. then has a space
// then a 4 letter name first letter is caps

const re2 = /^M[rs]\. [A-Z][a-z][a-z][a-z]$/g;
console.log(str.match(re2));
