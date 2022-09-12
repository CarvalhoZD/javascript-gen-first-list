const prompt = require('prompt-sync')();

const aString = prompt('Value of A: ');
const a = Number(aString);

const bString = prompt('Value of B: ');
const b = Number(bString);

const cString = prompt('Value of C: ');
const c = Number(cString);

let r = a + b;
r = Math.pow(r,2);
r.toFixed(2);

let s = b + c;
s = Math.pow(s,2);
s.toFixed(2);

const d = (r + s) / 2;
d.toFixed(2);

console.log(`The value of R is ${r} and value of S is ${s}. \n\nTherefore the value of D is ${d}.`);