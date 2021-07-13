// a letra 'e' e o número após, representa a quantidade de 'zeros' que queremos adicionar
var km = 18e7; // adciona 7 zeros, 180000000

console.log(km);

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

var soma1 = (10 + 10) + 20 + 30 * 4 / (2 + 10);
console.log(soma1);

var x = 5;

console.log(x++); // 5
console.log(x); // 6

var idade = '28';
var somaIdade = 5;

console.log(idade + somaIdade); // 285
console.log(+idade + somaIdade); // 33

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);

// Crie duas expressões que retornem NaN
var expressao1 = 'Teste' * 2;
var expressao2 = 'Teste' - 1;
console.log(expressao1, expressao2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50; // o '+' na frente do 200, faz com que não retorne '20050'
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento); // 6

// Como dividir o peso por 2?
var numero = '80'; // ou poderia ser: "var numero = +'80' / 2;""
var unidade = 'kg';
var peso = `${numero}`; // 80
var pesoPorDois = peso / 2 + `${unidade}`; // 40kg

console.log(pesoPorDois);