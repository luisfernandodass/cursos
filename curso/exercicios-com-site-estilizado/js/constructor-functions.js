/*
function Carro(marcaAtribuida, precoAtribuido){
  this.marca = precoAtribuido;
  this.preco = marcaAtribuida;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 1000);

function Carro2(marca, precoInicial){
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);

/*
const Dom = {
  seletor: 'li',
  element(){
    return document.querySelector(this.seletor)
  },
  ativar(){
    this.element().classList.add('ativar');
  }
}

Dom.ativar();
Dom.seletor = 'ul';
Dom.ativar();


// Transformar objeto Dom acima em constructor function
function Dom (el) {
  this.seletor = () => {
    return document.querySelector(el);
  }
  this.ativar = () => {
    return this.seletor().classList.add('ativar');
  }
}

const li = new Dom('li');
console.log(li.seletor(), li.ativar())

const ul = new Dom('ul');
console.log(ul.seletor(), ul.ativar())


// EXERCICIOS
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar(){
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nomeAtribuido, idadeAtribuida){
  this.nome = nomeAtribuido;
  this.idade = idadeAtribuida;
  this.andar = () => {
    return this.nome + ' andou';
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria / 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20); // joao.nome
const maria = new Pessoa('Maria', 25) // maria.idade
const bruno = new Pessoa('Bruno', 15) // bruno.andar()

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom.
// Deve conter as seguintes propriedades:
// elements => retorna NodeList com os elementos selecionados
// addClass(classe) => add a classe a todos os elementos
// removeClass(classe) => remove a classe de todos os elementos 

function DomListas(elSelected, nameClass){
  this.el = () => {
    return document.querySelectorAll(elSelected);
  }
  this.addClass = () => { // var.addClass() = add class
    this.el().forEach(item => {
      return item.classList.add(nameClass)
    })
  }
  this.removeClass = () => { // var.removeClass() = remove class
    return this.el().classList.remove(nameClass)
  }
}

const listaDl = new DomListas('dt', 'faq-ativo');
*/