const prompt = require('prompt-sync')()

const yearString = prompt('How many years have you lived? ')

const year = Number(yearString)

const monthString = prompt('How many months have you lived? ')

const month = Number(monthString)

const dayString = prompt('And how many days have you lived? ')

const day = Number(dayString)

const daysTotal = ((year * 365) + (month * 30) + day)

console.log(`You lived for ${daysTotal} days`)