
const li = document.querySelectorAll('li');
const liArray = Array.from(li);

const retornoForEach = liArray.forEach(item => {
  item.classList.add('ativa');
});

console.log(retornoForEach) // retorna undefined

const retornoMap = liArray.map(item => {
  return item;
}) 

console.log(retornoMap) // retorna uma nova array

const numeros = [2, 3, 5, 6, 11];
const numerosMultiplicados = numeros.map(n => {
  return n * 2;
})

console.log(numerosMultiplicados);

const aulas = [
  {
    nome: 'HTML',
    minutos: 15
  },
  {
    nome: 'CSS',
    minutos: 33
  },
  {
    nome: 'JavaScript',
    minutos: 9
  },
  {
    nome: 'Java',
    minutos: 18
  }
]

const arrayAulas = aulas.map(aula =>{return aula.minutos})

console.log(aulas())


const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((accumulator, item, index, array) => {
  console.log(accumulator + item)
  return accumulator + item;
}, 0);


// Acima ele faz 3 iterações
// Na primeira pega o 10 => 10
// Na segunda pega o 25 + 10 => 35
// Na terceira pega o 30 + 35 => 65
console.log(reduceAulas)

const maiorValor = aulas.reduce((anterior, atual) => {
  // se o anterior for maior que o atual, retorne o anterior
  // se não, retorne o atual
  return anterior > atual ? anterior : atual 
}, 0 )

console.log(maiorValor) // reetorna 30

const frutas = ['Banana', '', 'Maça', 'Pêra'];

const every = frutas.every(fruta => {
  return fruta ;
})

console.log(every)

const index = frutas.find(i => {
  return i; // não retorna o index, apenas retorna false or true
})
console.log(index)


const findIndex = frutas.findIndex(i => {
  return i === 'Maça'; // retorna index 2
})
console.log(findIndex)



const frutas1 = [null, 'Banana', '', false, 'Maça', undefined, 'Pêra', 0];
const onlyTrue = frutas1.filter(frutaTrue => {
  return frutaTrue;
})

console.log(onlyTrue) // (3) ["Banana", "Maça", "Pêra"]


// EXERCICIOS
// Selecione cada curso e retorne uma array com objetos contendo o título, descricao
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)
const objCursos = arrayCursos.map(curso => {

  const titulo = curso.querySelector('h1').textContent;
  const descricao = curso.querySelector('p').textContent;
  const aula = curso.querySelector('.aulas').textContent;
  const horas = curso.querySelector('.horas').textContent;

  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aula,
    horas: horas,
  }
})

console.log(objCursos)

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const listaMaiorQue100 = numeros.filter(n => n > 100);
console.log(listaMaiorQue100);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const verify = instrumentos.some( baixo => baixo === 'Baixo')
console.log(verify)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$2,99'
  },
  {
    item: 'Carne',
    preco: 'R$25,49'
  },
  {
    item: 'Laranja',
    preco: 'R$5,35'
  },
  {
    item: 'Banana',
    preco: 'R$10,60'
  },
]


let valorTotal = 0;
const listaCompras1 = compras.map(preco => {
  preco = preco.preco;
  preco = preco.replace('R$', '').replace(',', '.') // o js não entende que number tem virgula no brasil, só entende ponto
  preco = +preco; // transformado em number
  valorTotal += preco;

  return valorTotal.toLocaleString('PT-br', {style: 'currency', currency: 'BRL'});
})

console.log(listaCompras1[listaCompras1.length - 1]);


// Da para fazer do jeito acima ou do jeito abaixo

const listaCompras2 = compras.reduce((accumulator, currentValue) => {
  currentValue = currentValue.preco;
  currentValue = currentValue.replace('R$', '').replace(',', '.') // o js não entende que number tem virgula no brasil, só entende ponto
  currentValue = +currentValue; // transformado em number
  return currentValue + accumulator;
}, 0)

console.log(listaCompras2.toLocaleString('PT-br', {style: 'currency', currency: 'BRL'}));