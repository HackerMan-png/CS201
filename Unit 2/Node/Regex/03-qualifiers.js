// Phone Numbers
// (123) 456 7890
// 123-123-1234
// 1234567890
// (123)123-1234
const str = '1234567890';
const str1 = '(123) 456-7890';

const re = /^\(?[0-9]{3}[\)-]?[0-9]{3}[ -]?[0-9]{4}$/g;
console.log(str.match(re));

// Checking if a number is between 0-100
// 3
// 92
// 100

const re1 = /^[1-9][0-9]?$|^100$/;

// Checks a password to make sure it
// 1. Starts with 3 letters capital or lowercase
// 2. any 1 special character
// 3. ends in 4 evens including 0
const re2 = /^[a-zA-Z]{3}[^a-zA-Z0-9 \n\t]?[02468]{2,4}$/;
console.log(re2.test('pss@26'));
