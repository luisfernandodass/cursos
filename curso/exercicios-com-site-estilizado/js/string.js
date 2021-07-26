/*
const letra = 'f';
const nomeCompleto = 'Luis Fernando da Silva Santos';
console.log(nomeCompleto.includes(letra)); // true

const fruta = 'Banana';
console.log(fruta.startsWith('Ba'), fruta.startsWith('ba')); // true, false


const transacao = 'Depósito do cliente Luis no valor de R$2,00';

console.log('Cliente:', transacao.slice(20, 25)) // Luis
console.log('Depositou:', transacao.slice(37, 45)) // R$2, 00
console.log(transacao.slice(37, -5)) // index negativo corta os últimos caracteres da string
console.log(transacao.repeat(2))


let listaItens = 'Camisas Bonés Vestidos';
console.log(listaItens)
listaItens = listaItens.replace('Camisas', 'Cueca'); // substitui o camisas por cueca
console.log(listaItens)

console.log(listaItens.split(' ')) // retorna um array a partir de cada espaço (remove o espaço também)

// Utilizando o forEach no array abaixo, some os valores
// de Taxa e os valores de recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento do Cliente",
    valor: "R$ 49",
  },
];

let totalTaxValue = 0;
let totalReceivedValue = 0;

transacoes.forEach(item => {
  const becomeNumber = +item.valor.replace('R$ ', '');
  // const becomeNumber = item.valor.split('R$ '); // desse jeito não vai prq estou retirando, porém é transformado em array e continua com um certo espaço

  if(item.descricao.startsWith('Taxa')){
    //console.log('Taxa: ', item.valor)
    totalTaxValue += becomeNumber;
  } 
  if (item.descricao.startsWith('Recebimento')){
    //console.log('Recebimento: ', item.valor)
    totalReceivedValue += becomeNumber;
  }
})
console.log('Taxa total: ', totalTaxValue);
console.log('Recebimento total: ', totalReceivedValue);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
             </ul>`;
// abaixo eu tiro o span e transformo em array 
// e uso o método de array join() 
// e coloco a tag a no lugar que o split tirou
const novoHtml = html.split('span').join('a') 
console.log(novoHtml); 

// Retorne o último caracter da frase
const frase = "Melhor do ano";
console.log(frase.slice(frase.length - 1))

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "  TAXA DO PÃO",
  " taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let todasTx = 0; 
transacoes2.forEach(item => {
  item = item.toLowerCase();
  item = item.trim();
 
  if(item.startsWith('taxa')){
    todasTx++;
  }
})

console.log('Total de taxas: ', todasTx);

const str1 = '5';
console.log(str1.padStart(2, '1'));
console.log(str1.padEnd(2, '1'));
console.log(str1.padEnd(5, '1'));
*/