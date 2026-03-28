// biblioteca do node para receber a informação do usuario via terminal.

const readline = require('readline');

// diz que a  leitura será via terminal
const leitor = readline.createInterface({
    input: process.stdin, //entrada
    output: process.stdout //saida
});

// o leitor não precisa separar, senão a perguntas não será uma seguida da outra
leitor.question("Qual é seu nome? ", (nome) => {
    console.log("Olá", nome);
    console.log("Seja bem-vindo(a)!");

    leitor.question("Qual a sua idade?", (idade) => {
        if (idade >= 18) {
            console.log("você é maior de idade");
        } else {
            console.log("você é menor de idade");
        };
        leitor.close(); // encerra o uso do leitor
    })

})