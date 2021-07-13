// Retorne no console todas as imagens do site
const getImages = document.querySelectorAll('img');
console.log(getImages); // retorna nodeList com 8 itens

// Retorne no console apenas as imagens que começarem com a palavra imagem
const getImgByName = document.querySelectorAll('img[src^="img/imagem"]');
console.log(getImgByName); // retorna nodeList com 7 itens

// Selecione todos os links internos (onde o href começa com #)
const href = document.querySelectorAll('[href^="#"]') // o "^" significa = quero pegar o que está dentro, nesse caso a "tag a"
console.log(href); // retorna nodeList

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao'); // ou ('.animais-descricao h2')
const firstH2 = animaisDescricao.querySelector('h2');
console.log(firstH2.textContent); // Universo

// Selecione o último p do site
const getLastp = document.querySelectorAll('p');
console.log(getLastp[28].innerText); // ou console.log(gestLastp[getLastp.length - 1]);

// using forEach

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){ // 3 parâmetros
  console.log(item, index, array)
})

// array function
imgs.forEach((item, index, array) => {
  console.log(item)
})