function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(8));

function pi(){
  return 3.14;
}
console.log(pi());

function imc(peso, altura){ // Quando crio a função, passo parâmetros 
   const imc = peso / (altura ** 2); // **2 => expoente de 2
   return imc;
}

// Quando executo a função, passo argumentos no parâmetro
console.log(imc(80, 1.80)) 
console.log(imc(60, 1.70))

// Abaixo temos um 'callback' => função que ocorre depois de um evento
addEventListener('click', function(){ console.log('Hellow')})

function imc2(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
}

console.log(imc2(20, 1.8)); // undefined, por falta de return na function imc2

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Por favor, coloque a sua idade em dígitos'
  } else if(idade >= 60){
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));


var profissao = 'Designer';
function dados(){
  var nome = 'Luis';
  var idade = 18; // inativa
  function outrosDados(){
    var endereco = 'São Paulo';
    var idade = 18;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());

// Crie uma função para verificar se um valor é Truthy
function verficarValorVerdadeiro(value){
  return !!value;
}

console.log(verficarValorVerdadeiro(undefined)); // retorna falso

// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 4;
}

console.log(perimetroQuadrado(5)); // 20

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Luis', 'Santos'));

// Crie uma função que verifica se um número é par
function isEven(number){
  var modulo = number % 2;
  if(modulo === 0){
    return true;
  } else {
    return false;
  }
}

console.log(isEven(9)) // false, 9 isn't even

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function valueType(value){
  return console.log(typeof value);
}

valueType(null); // object, null => is object

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){ 
  console.log('Luis Fernando')
})

var totalPaises = 193;

function precisoVisitar(paisesVisitados){
  return `Ainda faltam ${totalPaises  - paisesVisitados}`;
}

console.log(precisoVisitar(50))