const { num } = require('./01-intro');
const logFunc = require('./03-moduleFunctions');
const { kids, num2, num3 } = require('./04-globals');
const freeMem = require('./05-os-module');

// APIKEY is a local variable only
// Unseeable from the base file
const APIKEY = 'DWIJDWIJDIWJDIJWIDJWI';

logFunc(freeMem);
logFunc(num + ' logging' + num3);
console.log(num + Number(num2));
