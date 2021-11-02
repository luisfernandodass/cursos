/*
const frutas = ['Banana', 'Pera', 'Goiaba', 'Mamão'];
const frase = 'Isso é JavaScript';

for(const char of frase){
    console.log(char)
}

for(const fruta of frutas){
    console.log(fruta)
}

const btn = document.querySelector('button');
const btnStyle = getComputedStyle(btn);

for(const buttonStyle in btnStyle){
    console.log(`${buttonStyle}: ${btnStyle[buttonStyle]}`)
}
*/

// Crie 4 li's na página, utilizando for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll('li');

for(const li of lis){
    li.classList.add('ativo');
    li.innerText = 'Ativo'
    console.log(li)
}

// Utilize o for...in para listar todas as propriedades e valores
// do objeto window

for(const p in window){
    console.log(`${p}: ${window[p]}`)
}