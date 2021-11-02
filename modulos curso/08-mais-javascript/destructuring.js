/*
const cliente = {
    nome: 'Luis',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas:{
            cadernos: ['Caderno 1']
        }
    }
}

// JEITO ANTIGO
console.log(cliente.compras.digitais.livros)
console.log(cliente.compras.digitais.videos)

// JEITO COM DESTRUCTURING, DESESTUTURANDO OBJETOS
const {livros, videos} = cliente.compras.digitais;
console.log(livros, videos)


// DESESTUTURANDO ARRAYS
const frutas = ['Banana', 'Uva', 'Morango'];
const [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira)

// EXERCICIOS

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const {backgroundColor, color, margin} = btnStyles;
console.log(backgroundColor, color, margin)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
console.log(cursoAtivo, cursoInativo)


// Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const {cor: bobColor} = cachorro;
console.log(bobColor)
*/
