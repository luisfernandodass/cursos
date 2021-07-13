// Adicione a classe ativa a todos os itens do menu
const itemsMenu = document.querySelectorAll('.menu a');

// menuLiArray = Array.from(menuLi);

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