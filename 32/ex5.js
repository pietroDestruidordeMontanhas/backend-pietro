const input = require('readline-sync')
let numpar = 0
let numimpar = 0


for( let i = 1; i <= 10; i++) {
    let num1 = Number(input.question())
    if (num1 % 2 === 0){
     numpar++
    }
    else{
        numimpar++
    }
}
console.log(`total de pares ${numpar}`)
console.log(`total de impares ${numimpar}`)