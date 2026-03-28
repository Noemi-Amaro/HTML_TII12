const frutas = ["Banana", "Maça", "Uva", "Laranja", "Limão"];
// posições do vetor: 0, 1, 2, 3, 4

//exibir o array:
console.log(frutas);

console.log("A primeira fruta:", frutas[0]);
console.log("A última fruta:", frutas[4]);
console.log("Total de frutas: ", frutas.length);

//adicionando um novo elemento ao meu array.
//acrescentando mais uma fruta, precisa ser  exibido de novo no console
frutas.push("Pêssego");
console.log(frutas);

//Removendo um elemento do meu array.
frutas.splice(2, 1);
console.log(frutas);

// 3 maneiras de percorrer a array
// Percorrendo o array com laço FOR:
for (let i = 0; i <= frutas.length; i++) {
    console.log("Indice: ", i);
    console.log(frutas[i]);
};

//Percorrendo o array com o método forEach:
frutas.forEach((valor, indice) => {
    console.log("Indice:", indice, "Frutas:", valor); //o valor será as frutas e o indice são as posições
});

// Percorrendo o array com FOR OF:
//laço para percorrer dentro do vetor, a cada posiçao do vetor tem uma passagem
for (const fruta of frutas) {
    console.log("Fruta da vez:", fruta);
};

//----------------------------------------------------------------------
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//usando o método filter para localizar apenas os números pares

const numerosPares = numeros.filter((numero) => {  //a varialvel é numero que ele vai percorrer
    // numerosPares: lista nova que filter copiou com base da array verdadeira
    return numero % 2 == 0 // condição é verdadeira
});

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0 // condição é verdadeira
});

console.log("Todos os números:", numeros);
console.log("Números pares:", numerosPares);
console.log("NúmerosImpares:", numerosImpares);

//----------------------------------------------------------------

//método map para manipulação dos valores.
//Tratamos dessa forma como valores diferentes (sem modificar o array original).

const quadrados = numeros.map((numero) => {
    return numero*numero;
});
console.log("Valores quadrados: ", quadrados);




