'use strict' // evita que erros bobos aconteçam

function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro)
}

mostrarCarro(); // carro is defined => Fusca
// console.log(carro); // carro is not defined

// 'var' permite que a variável vaze para fora do bloco
// 'const' evita que a variável vaze para fora do bloco, impede a redeclaração, NÃO permite a modificação do valor
// 'let' evita que a variável vaze para fora do bloco, impede a redeclaração, permite a modificação do valor
if(true){
  const fruta = 'Pessêgo'; 
  console.log(fruta)
}

// console.log(fruta) // fruta isn't defined 

{
  var carro2 = 'Camaro';
  const ano = 2018;
}

console.log(carro2);
// console.log(ano);

// Como corrigir o erro abaixo?

const dois = 2;

function somarDois(x){
  return x + dois;
}
function dividirDois(x){
  return x ** dois; // expoente
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++){
  console.log(numero);
}

const total = 10 * numero;
console.log(total);