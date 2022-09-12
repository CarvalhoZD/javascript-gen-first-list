const prompt = require('prompt-sync')();

const costString = prompt('Type the value of the car without taxes: ')
const cost = Number(costString)

const fabCost = ((cost * 28) / 100)

const taxCost = ((cost * 45) / 100)

const finalValue = (cost + fabCost + taxCost)

console.log(`\nThe final value of the car with taxes is : ${finalValue.toFixed(2)}`)