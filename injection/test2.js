const instance = require('./test1');

console.log('------------------2>', instance.a);

instance.a = 5;

require('./test3');

console.log('------------------2>', instance.a);