// ask user length and width of a room in meters
// log area of room to console in square meters and square feet

const readline = require('readline-sync');

const CONVERSION = 10.7639;

const AREA_IN_FEET = squareMeters => (squareMeters * CONVERSION).toFixed(2);

function prompt(msg) {
  console.log(`=> ${msg}`)
}

prompt("Enter the length of the room in meters:");
let length = readline.prompt();

prompt("Enter the width  of the rooms in meters:");
let width = readline.prompt();

let area = (width * length).toFixed(2);


prompt(`The area of the room is ${area} square meters (${AREA_IN_FEET(area)} square feet).`);

