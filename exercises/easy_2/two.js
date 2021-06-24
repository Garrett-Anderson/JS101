let readlineSync = require('readline-sync');

console.log(`What is your name?`);

let name = readlineSync.question();

if (name.endsWith('!')) {
  console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING, ${name.toUpperCase()}?`);
  } else {
  console.log(`Hllo, ${name}. Nice to meet you!`)
}