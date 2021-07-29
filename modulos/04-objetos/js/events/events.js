
const img = document.querySelector('img');

function callback(event){
  console.log(event); // event tem propriedades target, type, path, currentTarget, clienteY, layerY
}
img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
  console.log(event.currentTarget); // retorna this object que é o ul (.animais-lista)
  console.log(event.target); // retorna exatamente o elemento clicado
}
animaisLista.addEventListener('click', callbackLista);


const linkExterno = document.querySelector('[href^="https"]');

function handleLinkExterno(event){
  event.preventDefault(); // preveni o padrão, o padrão do link clicado seria ir para outra página, o que foi prevenido auqi
  console.log(event);
}
linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);
window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent)
// window.addEventListener('keydown', handleEvent) // dispara com a tecla clicada

function handleKeyboard(event){
  if(event.key === 'a'){
    document.body.classList.toggle('bg-black'); // adiciona bg black no body caso não tenha, se tiver, remove
  } 
}
window.addEventListener('keydown', handleKeyboard);


// Abaixo pega o src de cada img separadamente
const imgs = document.querySelectorAll('img');

function handleImg(event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach(item => {
 item.addEventListener('click', handleImg);
})

// EXERCICIOS
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens no caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('[href^="#"]');

function handleLinkInterno(event){
  event.preventDefault(); 
  linksInternos.forEach(item => { // remova a classe ativo de cada elemento
    item.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo') // adicione apenas no elemento clicado
  // console.log(event.currentTarget)
}

linksInternos.forEach(item => {
//  item.classList.toggle('ativo');
  item.addEventListener('click', handleLinkInterno);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clicar mostre exatamente quais elementos estão sendo clicados
function getEl(event){
  console.log(event.target);
}

window.addEventListener('click', getEl);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elementos que está sendo clicado, o método remove() remove um elemento
function removeEl(event){
  const el = event.target;
  el.style.display = "none"; // ou event.target.remove()
}

window.addEventListener('click', removeEl);

// Se o usuário clicar na tecla (t), aumento todo o texto do site
function increaseText(event){
  if (event.key === 't'){
    document.documentElement.classList.toggle('increase-text'); // documentElement => HTML
  }
}

window.addEventListener('keydown', increaseText);
