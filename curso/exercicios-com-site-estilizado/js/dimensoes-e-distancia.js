/*
const section = document.querySelector('.animais');
console.log(section.clientHeight);

// START EXERCISES
// Verifique a distância entre a primeira imagem em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop); // distância do topo do elemento ao topo da página

// Retorne a soma da largura de todas as imagens
function sumImgs(){
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach(item => {
    soma = soma + item.offsetWidth;
    console.log(item, item.offsetWidth)
  })
  console.log(soma)
}

window.onload = () => { // .onload para carregar as imagens antes do js
 sumImgs(); 
}

// Verifique se os links da página possuem o mínimo recomendado para telas
// utilizadas com o dedo.(48px/48px de acordo com o google)
const links = document.querySelectorAll('[href^="#"]')
links.forEach(item => {
  if(item.clientWidth >= 48 && item.clientHeight >= 48){
    console.log(item, 'it is ok according to google');
  } else{
    console.log(item, 'it is not ok according to google');
  }
})

// Se o browser for menor que 720px adicione a classe menu-mobile ao menu
const screenBrowser = window.innerWidth;
const menu = document.querySelector('.menu');
if(screenBrowser < 720){
  menu.classList.add('menu-mobile')
  console.log('menu-mobile adicionado')
}
// END EXERCISES
*/