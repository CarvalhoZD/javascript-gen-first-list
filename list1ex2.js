const prompt = require('prompt-sync')()

const daysTotalString = prompt('How many days have you lived? ')

const daysTotal = Number(daysTotalString)

const year = (daysTotal / 365)

const month = ((daysTotal % 365) / 30)

const day = ((daysTotal % 365) % 30)

console.log(`You lived for ${Math.trunc(year)} year(s), ${Math.trunc(month)} month(s) and ${Math.trunc(day)} days.`)