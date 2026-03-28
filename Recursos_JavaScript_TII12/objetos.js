const pessoa = {
    nome: "Ana",
    idade: 16,
    genero: "Mulher",
    estuda: true
};//dentro das chaves vai as propriedades e seus detrminados valores.

pessoa.sobrenome = "Clara";
console.log("Nome:", pessoa.nome); //coloca o nome do obejo.(ponto) nome da nova propriedade
console.log("Sobrenome:" , pessoa.sobrenome);

delete pessoa.idade;

console.log("Pessia: ", pessoa);

//incluindo "de fora"
pessoa.hobbies = ["ler", "escrever", "cantar"];
console.log("Pessoa: ", pessoa);

//FOR IN -> FOR OF É DO ARAY E O FOR IN DO OBJETO
for (const chave in pessoa){
    console.log("Chave:", chave);
    console.log("Valores: ", pessoa[chave]);
};

// MÉTODOS PARA OBJETOS:

const chaves= object.keys(pessoa);
const valores = object.values(pessoa);
const entradas = object.entries(pessoa);

console.log("Chaves: ", chaves);
console.log("Valores: ", valores);
console.log("Entradas: ", entradas);


