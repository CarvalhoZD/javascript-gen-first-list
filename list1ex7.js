const prompt = require('prompt-sync')();

const aString = prompt('Type the value of a: ');
const a = Number(aString);

const bString = prompt('Type the value of b: ');
const b = Number(bString);

const cString = prompt('Type the value of c: ');
const c = Number(cString);

const dString = prompt('Type the value of d: ');
const d = Number(dString);

const eString = prompt('Type the value of e: ');
const e = Number(eString);

const fString = prompt('Type the value of f: ');
const f = Number(fString);

const x = ((c * e) - (b * f)) / ((a * e) - (b * d));
const y = ((a * f) - (c * d)) / ((a * e) - (b * d));

console.log(`\nValue of x: ${x.toFixed(4)}.`)
console.log(`Value of y: ${y.toFixed(4)}.`)