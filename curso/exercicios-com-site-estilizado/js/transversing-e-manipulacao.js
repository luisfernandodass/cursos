/*
const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
console.log(h1.innerHTML); // retorna apenas o texto
console.log(h1.outerHTML); // retorna a tag, atributos e texto

h1.outerHTML = '<p>Novo título</p>'; // aqui substitui as tags também ao invés de apenas o texto
console.log(animais.innerHTML); // retorna txt com as tags
console.log(animais.innerText); // retorna txt
*/

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); // retorna o pai (section)
console.log(lista.parentElement.parentElement) // retorna pai do pai (body)
console.log(lista.previousElementSibling) // retorna o elemento acima (h1)
console.log(lista.nextElementSibling) // retorna o elemento abaixo (div.animais-descricao)

console.log(lista.children) // retorna HTMLCollection com os filhos
console.log(lista.children[0]) // primeiro filho
console.log(lista.children[--lista.children.length]); // último filho, ou se pode usar [lista.children.length -1]

// DIFERENÇA ENTRE Element e Node
// Element = tags
// Node = muitas coisas podem ser node, como: espaço, texto, comment- etc