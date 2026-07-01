const input = require('readline-sync')
let num1 = input.question()
for( let i = 1; i <= 10; i++) {
console.log(`${num1} x ${i} = ${num1 * i}`);
}