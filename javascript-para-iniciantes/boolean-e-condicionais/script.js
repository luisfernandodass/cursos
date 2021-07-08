var x = +"10";
console.log(x === 10); // true

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão', retorna o último valor, (string = true)
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // Retorna falso
}

// Abaixo retorna o último true
var condicional = 5 - 15 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

// Abaixo retorna o primeiro true
var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var corFavorita = "Vermelho";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o mar");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a árvore");
    break;
  default: // Caso não dê nada
    console.log("Feche os olhos");
}

// Verifique se a sua idade é maior do que a de algum parente
// Depedendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var myAge = 18;
var cousinAge = 18;

if(myAge > cousinAge){
  console.log("A minha é maior");
} else if (myAge === cousinAge){
  console.log("É igual")
} else {
  console.log("É menor") 
}

// Qual o valor retornado na seguinte expressão
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 (o último valor)
console.log(expressao) // 3
console.log(5 - ' ')  // 5
console.log(5 - 'ss') // NaN


// Verifique se as seguintes variáveis são true or false
var nome = 'Luis'; // true
var idade = 18; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('Brasil tem mais gente que a China')
}else {
  console.log('China tem mais gente que o Brasil') // Retorna isso
}

// O que irá aparecer no console? => false
if(('Gato' === 'gato') && (5 > 2)){
  console.log('Verdadeiro');
} else {
  console.log('False');
}

// O que irá aparecer no console? => 'Cão'
if(('Gato' === 'gato') || (5 > 2)){
  console.log('Gato' && 'Cão') // O último valor
} else {
  console.log('Falso');
}

