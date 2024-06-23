const score = 200

console.log(score);

const balance = new Number(100)

console.log(balance.toString());
console.log(balance.toFixed(1));

const otherNumber =25.394
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


const min = 10
const max=30
console.log( Math.random() * (max-min+1) + min )