/*
// START EXERCISES
// Mostre o texto dos parágrafos no console
const showP = document.querySelectorAll("p");
showP.forEach((item) => {
  // esse parâmetro "item" é o "showP"
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:

// const imgs = document.querySelectorAll('img');
// imgs.forEach(item, index => {
// console.log(item, index)
// });


const showImgs = document.querySelectorAll("img");
showImgs.forEach((item, index) => {
  console.log(item, index);
});


// let i = 0;
// imgs.forEach( => {
// console.log(i++);


let i = 0;
showImgs.forEach(() => {
  console.log(i++);
});

showImgs.forEach(() => i++); // não há erro nessa sintaxe
// END EXERCISES

//  START USING CLASSLIST
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
//  END USING CLASSLIST


// START EXERCISES
// Adicione a classe ativa a todos os itens do menu
const itemsMenu = document.querySelectorAll('.menu a');

itemsMenu.forEach(item => {
  item.classList.add('ativo');
})

console.log(itemsMenu)

// Remova a classe ativo de todos os itens do menu e matenha apenas no primeiro
itemsMenu.forEach(item => {
  item.classList.remove('ativo');
})
itemsMenu[0].classList.add('ativo');
console.log(itemsMenu);

// Verifique se as imagens possuem o atributo alt
const imgs02 = document.querySelectorAll('img');

// const imgs02Array = Array.from(imgs02);

imgs02.forEach(item => {
  (item.hasAttribute('alt') === true)
  ? console.log(item, 'Here we have alt element')
  : console.log(item, 'Here we do not have alt element')
})

// Modifique o href do link externo no menu
const getLinkExternOfMenu = document.querySelectorAll('.menu li a');
const hrefLink = getLinkExternOfMenu[getLinkExternOfMenu.length - 1].getAttribute('href');
console.log(hrefLink);
const hrefLinkUpdated = getLinkExternOfMenu[getLinkExternOfMenu.length - 1].setAttribute('href', '#luisfernando.netlifly.app/');
console.log(getLinkExternOfMenu[getLinkExternOfMenu.length - 1].getAttribute('href'));
// END EXERCISES
*/