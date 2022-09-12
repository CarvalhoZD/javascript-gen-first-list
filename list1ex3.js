const prompt = require("prompt-sync")()

const totSecondsString = prompt('Event duration in seconds: ')
const totSeconds = Number(totSecondsString)

const hours = totSeconds / 3600

const minutes = (totSeconds % 3600) /60

const seconds = (totSeconds % 3600) % 60

console.log(`The event had ${Math.trunc(hours)} hour(s), ${Math.trunc(minutes)} minute(s) and ${Math.trunc(seconds)} second(s).`);