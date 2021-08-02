
console.log(Number.isInteger(20)) // true
console.log(Number.isInteger(20.9)) // false

console.log(parseFloat('165 reais')); // 165
console.log(parseFloat('165.289 reais')); // 165.289
console.log(parseInt('165.289 reais')); // 165
console.log(parseInt(89.85664)); // 89

const preco = 2.99899
console.log(preco.toFixed(3)) // 2.999 => arredondou o 8 para 9

let valor = 48.49;
console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 49,49 reais
console.log(valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $48.49 dólar    


console.log(Math.PI) // 3.14
console.log(Math.ceil(5.5)) // 6
console.log(Math.floor(5.5)) // 5
console.log(Math.abs(-2)) // 2 (positivo), valor absoluto


console.log(Math.max(5, 50, 10, 2, 3, 89, 75)) // 89
console.log(Math.min(5, 50, 10, 2, 3, 89, 75)) // 2

console.log(Math.floor(Math.random() * 25 - 0 - 1) + 0); // gera um número aleatório entre 25 e 0


// Retorne um número aleátorio entre 1050 e 2000
console.log(Math.floor(Math.random() * 2000 - 1050 -1) + 1050);
console.log(Math.ceil(Math.random() * 2000 - 1050 -1) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', '); // transforma em array, porém continua string
console.log(Math.max(...numerosArray)) // vira string, (...) é o operator spread, passa cada item do array como um argumento.

// Crie uma função para limpar os preços e retornar os números com centavos
// arrendodados depois retorne a soma total
const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230', 'r$200'];
let sum = 0;


function limparPrecos(){
  listaPrecos.forEach(item => {
    item = item.toUpperCase();
    item = item.replace('R$', '');
    item = item.trim();
    item = +item.replace(',','.')
    item = +item.toFixed(2);
    console.log('R$', sum += item )

    item = item.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    console.log(item)
  })
}

limparPrecos();