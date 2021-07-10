const href = window.location;
// window.alert(href);

const heightPage = window.innerHeight;
console.log(heightPage) // 640 (altura da página)

const h1Selecionado = document.querySelector('h1');
const h1Height = h1Selecionado.offsetHeight; // 78 (altura do elemento)

function callbackh1(){
  console.log('Clicou em ', h1Selecionado.innerText)
  console.log(h1Height) // 78 (altura do elemento)
}

h1Selecionado.addEventListener('click', callbackh1);

// EXERCICIOS

// Retorne o url da página atual utilizando o obj window
console.log(window.location);

// Seleciona o primeiro elemento da página que possua a classe ativo
const getClassActive  = document.querySelector('.active');
console.log(getClassActive.innerText) // 3

// Retorne a linguagem do navegador
console.log(window.navigator.language) // pt-BR

// Retorne a largura da janela
console.log(window.innerWidth); // 214