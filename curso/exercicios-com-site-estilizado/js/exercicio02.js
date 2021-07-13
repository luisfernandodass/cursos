// Mostre o texto dos parágrafos no console
const showP = document.querySelectorAll("p");
showP.forEach((item) => {
  // esse parâmetro "item" é o "showP"
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:

/* 
const imgs = document.querySelectorAll('img');
 imgs.forEach(item, index => {
   console.log(item, index)
});
*/

const showImgs = document.querySelectorAll("img");
showImgs.forEach((item, index) => {
  console.log(item, index);
});

/*
let i = 0;
 imgs.forEach( => {
  console.log(i++);
*/

let i = 0;
showImgs.forEach(() => {
  // });
  console.log(i++);
});

showImgs.forEach(() => i++); // não há erro nessa sintaxe

//  Using classList

const menu = document.querySelector(".menu");

menu.classList.add("ativo");

console.log(menu);

menu.classList.toggle("cel"); // não tinha 'cel' na lista, então adicionou.
menu.classList.remove("menu");
console.log(menu);

menu.classList.replace("cel", "menu"); // substitui 'cel' por 'menu'
console.log(menu);

console.log(menu.classList.contains("menu"));

menu.className += " vermelho"; // className sobreescreve as classes anteriores, por isso temos que receber as classes já existentes (+=) ao adicionar uma nova.

console.log(menu.className); // retorna string

const animais = document.querySelector(".animais");

console.log(animais.attributes["data-texto"]); // ou atributtes.id, o data-texto retornamos com [''] por causa do traço

const img2 = document.querySelector("img");

console.log(img2.getAttribute("src")); // pega o valor do src
img2.setAttribute("alt", "Texto Alternativo"); // muda o alt ou cria o atributo se não existir
console.log(img2.hasAttribute("id")); // retorna boolean
img2.removeAttribute("alt"); // remove o atributo alt
