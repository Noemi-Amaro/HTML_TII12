/*  1: Criar função que pode calcular o IMC (Indice de massa corporal) de uma pessoa e 
apresentar valor no console (console.log(valor)) ; formula do IMC (PESO / (ALTURA*ALTURA))
 */

let peso = 78;
let altura = 1.64;

function imc(peso,altura ){
    let calculo = peso/(altura * altura) 
    return calculo
}

console.log(imc(peso,altura))


/* 2: Criar função que pode calcular o IMC, e colocar tanto o IMC quanto o nome da pessoa como valores dentro de 
um objeto e apresentar esse objeto no console (Exemplo de objeto: {nome:"Richard",idade:17})
*/


function imcCalculo1(){

    let peso = 78;
    let altura = 1.64;

    let calculo = peso/(altura * altura) 
    
    let paciente = {nome: "Ana", idade: "35"}

    console.log(paciente.nome,paciente.idade,calculo)
}

/*outro método
imc_calculo3()
    let peso = 65;
    let peso2 = 64;
    let altura = 1.64;
function imc(pesoParametro, alturaParametro){


    let calculo = pesoParametro/(alturaParametro*alturaParametro)
    return { nome: "Noemi", idade: "30", imc}

}

 console.log(imc(peso2,altura)) */


 /* 3: Na mesma função da questão 2 , aplicar a classificação do IMC baseado no seu valor e 
 inserir ela no objeto criado,junto com o IMC e o nome da pessoa sendo avaliada : 
 - classificação de IMS
 - Menor que 18.5: "Abaixo do peso"
 - Entre 18.5 e 24,9: "Peso normal"
 - Entre 25 e 29.9: "Sobrepeso"
 - Maior ou igual a 30: "Obesidade" */

 function imcCalculo2(){

    let peso = 80;
    let altura = 1.90;

    let calculo = peso/(altura * altura) 
    
   if (calculo < 18.5){
    console.log("abaixo do peso")
   }

    else if (calculo >= 18.5 && calculo <= 24.9){
    console.log("Peso normal")
   }

    else if (calculo >= 25 && calculo <= 29.9){
    console.log("Sobrepeso")
   }

   if(calculo >= 30) {
    console.log("Obesidade")
   }


   4: 
   let preco = 20;
let desconto = 0.2;
function descontoEquacao(valorPreco,valorDesconto){
    return valorPreco * valorDesconto
}
 console.log(descontoEquacao(preco,desconto))


}















 /* 4: Criar uma função que calcula e retorna o preço final de um produto. 
 A função deve receber como parâmetros o preço base e um desconto, retornar o preço final e apresentar ela no console​*/

