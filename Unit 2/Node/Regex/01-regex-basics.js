const str = 'test1 test_01.js coding.css script.js testing.coding';
const re = /test/; // single search
const reg = /test/g; // global search

console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(reg));
console.log(str.replace(reg, 'script'));

The human heart creates enough pressure when it pumps out to the body to squirt blood 30 feet. Bats always turn left when exiting a cave. Our eyes are always the same size from birth, but our nose and ears never stop growing. All polar bears are left-handed. A snail can sleep for three years. Elephants are the only animals that can't jump. Only one person in two billion will live to be 116 or older.