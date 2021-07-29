
const carro = {
  marca: 'BMW',
  ano: 2021
}

function descricaoCarro(){
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro(); // undefined
descricaoCarro.call(carro); // carro é passado como o novo this


function Dom(seletor){
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe)
}

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativo')

console.log(li.element)


const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('opa');
})

console.log(filtro) // retorna apenas as classes que contém opa


const numeros = [1, 5, 6, 45, 89 ,7, 4, 9];
console.log(Math.max.apply(null, numeros))

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo){
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}

console.log(carro.acelerar(10, 35)) // Ford acelerou 10 em 35

function imc(altura, peso){
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

// console.log(Math.floor(imc(1.80, 70)))
console.log(imc180(70))


// EXERCICIOS
// Retorne a soma total de caracteres dos parágrafos acima 
// utilizando reduce
const paragrafos = document.querySelectorAll('p');
const arrayParagrafos = Array.from(paragrafos);

// let totalCaract = 0;
// arrayParagrafos.map(p => {
// p = p.innerHTML.length;
// totalCaract += p;
// })
// console.log(totalCaract)

// do jeito acima deu certo, do jeito abaixo também

const totalCaracteres = arrayParagrafos.reduce((acc, p) => {
  return acc + p.innerHTML.length;
}, 0)

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos html,
// com os seguintes parâmetros
// tag, classe e conteúdo

function html(tag, classe, conteudo){
 const el = document.createElement(tag)
 el.classList.add(classe);
 el.innerText = conteudo;
 return el;
}

console.log(html('a', 'ok', 'texto descritivo'))

// Crie uma nova função utilizando como a anterior 
// como base, essa nova função deverá sempre criar h1 com
// classe titulo. Porém o parâmetro conteudo continuará dinâmico 

const newHtml = html.bind(null, 'h1', 'titulo');
console.log(newHtml());