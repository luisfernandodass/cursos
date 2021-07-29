
function teste (){
  return '1 + 1;'
}
console.log(teste().constructor) // retorna string
console.log(Object.getOwnPropertyNames(Array)); // retorna 6 métodos/propriedades
console.log(Object.getOwnPropertyNames(Array.prototype)); // retorna 33 métodos/propriedades

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar(){
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String


// EXERCICIOS
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = () => {
  return `${this.nome} ${this.sobrenome}`;
}

const luis = new Pessoa('Luis', 'Santos', 79)
console.log(luis)

// Liste os métodos acessados por dados criados com NodeList,
// HTMLColleciton, Document
const a = document.querySelectorAll('a'); // nodeList
console.log(a)
console.log(Object.getOwnPropertyNames(NodeList.prototype)) //  constructor, entries, forEach, item, keys, length, values
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype)) // item, length, namedItem​
console.log(Object.getOwnPropertyNames(Document.prototype)) //getElementsByTagName", "getElementsByClassName" etc

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// usei isso => li.constructor.name;

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined prq não está retornano nada

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // uma String prq retorna 'Boolean'
const verConstrutorAcima =  li.hidden.constructor.name;
console.log(verConstrutorAcima.constructor.name) // String

// EXERCICIOS
// Liste 5 objetos nativos
String;
Boolean;
Array;
Object;
Function;
Date;

// Liste 5 objetos de browser
Document;
HTMLCollection;
window;
navigator;
localStorage; // ou Storage;
sessionStorage;
history;

// Liste 2 métodos, propriedades ou objetos presente no Chrome que não existem no Firefox
if (typeof document.webkitHidden !== "undefined"){ // webkit é implementação do chrome
  console.log('Existe no Chrome')
} else {
  console.log('Não existe no Firefox')
}
