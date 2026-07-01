const input = require('readline-sync')

function validarSenha(senha) {
    return senha.length >= 8;
}

let senhaDigitada = input.question("Digite a senha: ")

if (validarSenha(senhaDigitada)) {
    console.log("Senha valida")
} else {
    console.log("Senha fraca – minimo 8 caracteres")
}
