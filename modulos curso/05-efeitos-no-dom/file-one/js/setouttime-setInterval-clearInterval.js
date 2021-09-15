// Aparece um núemro novo de 1 em 1 segundo (por da multiplicação pelo i)
/*
for (let i = 0; i < 20; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}


// Aparece um núemro novo de 1 em 1 segundo

let i = 0;
const interval = setInterval(callback, 1000)


function callback() {
    console.log(i++)
    if(i > 10){
        clearInterval(interval)
        console.log('Stopped here')
    }
}
*/

// EXERCICIOS
// Mude a cor da tela para azul e depois para vermelho a cada 2 s
const bgBody = document.body;
/*
setInterval(() => {
    bgBody.style.background = "blue"
}, 1000)

setInterval(() => {
    bgBody.style.background = "red"
}, 3000)
*/

// Crie um elemento utilizando o setInterval.
// Deve ser possível iniciar, pausar e resetar(duplo clique no pausar)
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const time = document.querySelector('.time');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo(){
    timer = setInterval(() => {
        time.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '')
}

function pausarTempo(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled')
}

function resetarTempo(){
    time.innerText = "0";
    i = 0;
}