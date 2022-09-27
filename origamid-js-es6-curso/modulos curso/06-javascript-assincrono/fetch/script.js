/*
const promessa = new Promise ((resolve, reject) => {
    let condicao = true;
    if(condicao){
        resolve({nome: "luis", idade: 18})
    } else {
        reject(Error("Um erro ocorreu."));
    }
})

promessa.then((resolucao) => {
    console.log(resolucao);
})

const retorno = promessa
.then(resolucao => {
    resolucao.profissao = "Desenvolvedor";
    return resolucao;
})
.then(resolucao => {
    console.log(resolucao);
})
.catch(rejeitada => {
    console.log(rejeitada)
})

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500)
})

// Promise.all() retorna uma promise assim que todas as promises
// dentro dela forem resolvidas o pelo menos uma rejeitada
// retorna a reposta em um array com cada Promise
const carregouTudoAll = Promise.all([login, dados]);
console.log(carregouTudoAll) // PromiseResult: Usuário Logado e Dados carregados


// Promise.race() retorna uma nova promise assim que a primeira promise
// for resolvida ou rejeitada
const carregouTudoRace = Promise.race([login, dados]);
console.log(carregouTudoRace) // PromiseResult: Usuário Logado
 */

// Exercicios

// Utilizando a API viacep crie um formulário onde o user
// pode digitar o cep e o endereço compelto retornado ao buscar
// >>>>>> JÀ FIZ

// Utilziando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais
// atualize o valore a cada 30s

const bitcoinValue = fetch("https://blockchain.info/ticker");

bitcoinValue
.then(values => values.json()
)
.then(brValue => {
  let currentValue = brValue.BRL.last; // 239.738,32
  const spanValue = document.querySelector('.spanValue');

  setInterval(() => {
  currentValue++;
  spanValue.innerText = currentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }, 5000)

})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, todas vez
// que o usuário clicar em próxima

const button = document.querySelector('button');
button.style.cursor = 'pointer';

function gerarPiadas(){
  const piada = fetch("https://api.chucknorris.io/jokes/random");
  piada
  .then(values => values.json()
  )
  .then(piadaText => {
    const spanPiada = document.querySelector('.spanPiada');
    spanPiada.innerText = piadaText.value;
  })
}

button.addEventListener('click', gerarPiadas)
