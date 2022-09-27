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