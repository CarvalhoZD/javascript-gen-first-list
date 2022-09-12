const prompt = require('prompt-sync')();

const grade1String = prompt('Type the value of the first grade: ');
const grade1 = Number(grade1String);

const grade2String = prompt('Type the value of the second grade: ');
const grade2 = Number(grade2String);

const grade3String = prompt('Type the value of the third grade: ');
const grade3 = Number(grade3String);

const average = ((grade1 * 2) + (grade2 * 3) + (grade3 * 5)) / (2 + 3 + 5);

console.log(`The average of your grade is ${average.toFixed(1)}.`)