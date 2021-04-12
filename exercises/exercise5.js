// prompt user for bill amount
// prompt user for tip rate
// log tip and total amount of the bill to console

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`)
}

prompt("What is the bill?");
let bill = Number(readline.question());

prompt("What is the tip percentage?");
let tipPercentage = Number(readline.question())

let tip = bill * (tipPercentage / 100);

let total = bill + tip;


console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

