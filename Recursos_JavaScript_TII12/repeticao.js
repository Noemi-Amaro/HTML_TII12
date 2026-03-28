// LAÇOS DE REPETIÇÃO
// WHILE , DO WHILE e FOR.
let contador = 1;
let contador2 =1;
//testa a condição antes
while (contador <= 10) {
    console.log(contador + "");
    contador++;
};

do {
    console.log(contador2 + "");
    contador2++;
} while (contador <= 10);

for(let numero = 1; numero <= 5; numero++){
console.log(numero, "");
};

let palavra = "calopsita";
// length : conta quantos caracteres existem em uma string.
for(let contador = 0; contador <= palavra.lenght; contador++){
    console.log (palavra [contador]);
};