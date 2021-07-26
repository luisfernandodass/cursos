/*
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
*/
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