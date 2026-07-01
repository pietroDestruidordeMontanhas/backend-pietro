const input = require('readline-sync')
let num1 = Number(input.question())
let num2 = Number(input.question())
let soma = num1 + num2
let sub = num1 - num2
let mut = num1 * num2
soma = parseInt(num1) + parseInt(num2)
console.log(soma)
console.log (sub)
console.log(mut)
if(num2 === 0){
    console.log("não é possivel dividir por 0")
}
else{
    let div = num1 / num2
      console.log(div)
}