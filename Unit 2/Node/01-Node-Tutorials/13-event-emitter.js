const eventEmitter = require('events');

const customEvent = new eventEmitter();

customEvent.on('request', (name, id) => {
  console.log(`${name} has and id of ${id}`);
});

customEvent.on('food', (name, _, __, food) => {
  console.log(`${name}'s favorite food is ${food}`);
});

customEvent.emit('request', 'Jimmy', 12345, true, 'Donuts');
customEvent.emit('food', 'Jimmy', 12345, true, 'Donuts');
