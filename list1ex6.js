const prompt = require('prompt-sync')();

const x1String = prompt('Type the value of x1: ');
const x1 = Number(x1String);

const x2String = prompt('Type the value of x1: ');
const x2 = Number(x2String);

const y1String = prompt('Type the value of x1: ');
const y1 = Number(y1String);

const y2String = prompt('Type the value of x1: ');
const y2 = Number(y2String);

const value_x = (x1 - x2);

const value_y = (y1 - y2);

const rad = ((Math.pow(value_x,2)) + (Math.pow(value_y,2)));

const distance = Math.sqrt(rad);

console.log(`The distance is: ${distance.toFixed(3)}.`);