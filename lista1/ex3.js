const input = require('readline-sync')

let i = input.question()
let resultado = (i % 2 === 0) ?"par" : "inpar"
console.log(resultado)