var pessoa = {
  nome: 'Luis',
  idade: '18',
  cidade: 'Mauá'
}

console.log(pessoa.cidade)

var quadrado = {
  lados: 4, // variável/propriedade
  area(lado){ // function/método
    return lado * lado;
  }, 
  perimetro(lado){ // abreviação de "area: function(perimetro)"
    return this.lados * lado;
  },
  cinco(){
    return 5;
  },
}

console.log(quadrado.lados) // retorna propriedade
console.log(quadrado.cinco()) // retorna método
console.log(quadrado.area(5)) // retorna método
console.log(quadrado.perimetro(6)) // retorna método

console.log(Math.random());

var height = 100; // nao pega essa
var menu = {
  width: 800,
  height: 300, // pega aqui por causa do "this."
  backgroundColor: '#ffdeed',
  metadeHeight(){
    return this.height / 2; // pega o height dentro do objeto menu
  }
}

menu.color = 'red';
menu.esconder = function(){
  return console.log('Escondido')
}

var bg = menu.backgroundColor;
console.log(menu.color)
console.log(bg)
menu.esconder();
console.log(menu.metadeHeight())

// Dot Notation => Notação de ponto
// objeto.método()
// console.log()

// EXERCICIOS
// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  primeiroNome: 'Luis',
  ultimoNome: 'Santos',
  idade: 18,
  cpf: '45556668996',
  endereco: 'Rua Luis Aletto, 49',
  nomeCompleto(){
    return `${this.primeiroNome} ${this.ultimoNome}`;
  }
}

// Crie um método no objeto anterior que moste o seu nome completo
console.log(dadosPessoais.nomeCompleto())

// Modifique o vlaor da propriedade preco para 3000
var carro = {
  preco: 1000,
  porta: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador
// preto com 10 ano, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  nome: 'Max',
  idade: 10,
  cor: 'preto',
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'Auauaau!';
    } else {
     return 'Keep calm';
    }
  }
}

console.log(cachorro.latir('homem')); // Auauaua!