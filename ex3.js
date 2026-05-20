const input = require('readline-sync')
let nota1 = input.question()
let nota2 = input.question()
let nota3 = input.question()
let nota4 = input.question()
let nota5 = input.question()
let media
media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5)) / 5
console.log(media)
for (let i = 0; i < 1; i++) {
    if (media >= 7) {
        console.log("aprovado")
    } else {
        console.log("reprovado")
    }
}
