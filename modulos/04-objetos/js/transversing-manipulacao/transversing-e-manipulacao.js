
const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
console.log(h1.innerHTML); // retorna apenas o texto
console.log(h1.outerHTML); // retorna a tag, atributos e texto

h1.outerHTML = '<p>Novo título</p>'; // aqui substitui as tags também ao invés de apenas o texto
console.log(animaisLista.innerHTML); // retorna txt com as tags
console.log(animaisLista.innerText); // retorna txt


const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); // retorna o pai (section)
console.log(lista.parentElement.parentElement) // retorna pai do pai (body)
console.log(lista.previousElementSibling) // retorna o elemento acima (h1)
console.log(lista.nextElementSibling) // retorna o elemento abaixo (div.animais-descricao)

console.log(lista.children) // retorna HTMLCollection com os filhos
console.log(lista.children[0].innerHTML) // primeiro filho
console.log(lista.children[--lista.children.length].innerHTML); // último filho, ou se pode usar [lista.children.length -1]

const footer = document.querySelector('footer');
lista.appendChild(footer) // adiciona o footer como último filho na lista de imagens


const ul = document.querySelector('ul');
const li = document.querySelector('li');
const firstImg = document.querySelector('img');

ul.insertBefore(firstImg, li); // o úlitmo parâmetro tem que ser filho do ul
ul.removeChild(li); // remove o filho (li)
ul.replaceChild(firstImg, li); // o úlitmo parâmetro tem que ser filho do ul

// DIFERENÇA ENTRE ELEMENT E NODE
// ELEMENT => tags
// NODE => muitas coisas podem ser node, como: espaço, texto, comment- etc

const newLink = document.createElement('a'); // cria o elemento a
newLink.innerText = 'New link'; // add texto ao a
newLink.classList.add('new-link'); // add classe ao a

ul.appendChild(newLink); // add após o último filho
ul.insertBefore(newLink, li);// add antes o primeiro filho (li)

const titulo0 = document.querySelector('h1');
const titulo1 = document.querySelector('h1');
const titulo3 = titulo0;
// os titulos acima recebem o mesmo elemento

const cloneTitulo = titulo0.cloneNode(true); // o parâmetro indica se deve clonar os filhos ou não
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo); // desse jeito 2 elementos iguais, porém separados passam a existir no documento


// EXERCICIOS
// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const firstDT = faq.querySelector('dt');
console.log(firstDT.innerText)

// Selecione o DD referente ao primeiro DT
const dd = firstDT.nextElementSibling;
console.log(dd.innerText)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
faq.outerHTML = animais.outerHTML; // outer => passa a section também, o que ajuda pois já está estilizado
