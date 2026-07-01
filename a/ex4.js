function executarOperacao(a, b, operacao) {
    const resultado = operacao(a, b);
    console.log(resultado);
}

executarOperacao(10, 3, (a, b) => a + b);
executarOperacao(10, 3, (a, b) => a * b);
executarOperacao(10, 3, (a, b) => a - b);