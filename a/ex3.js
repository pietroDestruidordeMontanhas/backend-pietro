const input = require('readline-sync')

const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b === 0 ? "Erro: divisao por zero" : a / b;

let num1 = Number(input.question("Digite o primeiro numero: "))
let num2 = Number(input.question("Digite o segundo numero: "))

console.log(somar(num1, num2))
console.log(subtrair(num1, num2))
console.log(multiplicar(num1, num2))
console.log(dividir(num1, num2))
