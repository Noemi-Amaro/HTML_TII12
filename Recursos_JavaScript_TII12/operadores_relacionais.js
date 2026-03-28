//OPERADORES RELACIONAIS
//> , <, == , ===, <= , >=

const idadeNalon = 26;
const idadeClara = 16;      

//Comparando valores:
const saoIguais = idadeNalon == idadeClara;
console.log ("São iguais? " + saoIguais);

const comparacao = idadeNalon > idadeClara;
console.log("é maior? " + comparacao);

const comparacao2 = idadeNalon < idadeClara;
console.log("é menor? " + comparacao2);

// 2 sinais de "=": "comparação de valores"
// 3 sinais de "=": compação estrita de valores e tipos.

const comparacao3 = idadeNalon !== idadeClara;
console.log("São diferentes? " + comparacao3);

 //COMPARADORES: E, OU e NÃO

 const idade = 26;
 const maiorIdade = idade > 18; // true
 const possuiCNH = true;

 const podeDirigir = maiorIdade & possuiCNH; // E
 console.log("Pode dirigir? " + podeDirigir);

 const podeViajar = maiorIdade || possuiCNH; // OU
 console.log("Pode viajar? " + podeViajar);

 const acompanhante = !maiorIdade; // NÂO
 console.log ("Precisa de acompanhante? " + acompanhante);
 
 


