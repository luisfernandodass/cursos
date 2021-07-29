var numero = 10;

// numero = numero + 10;
numero += 10;
console.log(numero);

// numero  = numero / 10;
numero /= 10;
console.log(numero);

// numero  = numero ** 10;
numero **= 10; // expoente
console.log(numero);

// ATRIBUIDOR TERNÁRIO
var idade = 19;
var naoPossuiDiabetes = true;

var podeBeber = (idade >= 18 && naoPossuiDiabetes) 
? 'Pode beber'
: 'Não beba!';
console.log(podeBeber)


// Some 500 ao valor de scroll abaixo
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa
// E false caso o contrário
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) 
? 'Crédito concedido'
: 'Infelizmente não foi possível te dar crédito'

console.log(darCredito)



