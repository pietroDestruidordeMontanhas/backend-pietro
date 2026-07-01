const input = require('readline-sync')

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {  
        return "Erro: divisao por zero";
    }
    return a / b;
}

let num1 = Number(input.question("Digite o primeiro numero: "))
let num2 = Number(input.question("Digite o segundo numero: "))

console.log(somar(num1, num2))
console.log(subtrair(num1, num2))
console.log(multiplicar(num1, num2))
console.log(dividir(num1, num2))