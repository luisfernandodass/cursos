
const dados = [
  new String("Tipo 1"), // posição 0 do Array
  ["Carro", "Portas", { cor: "Azul", preco: 200 }], // posição 1 do Array
  function andar(nome) { // posição 3 do Array
    console.log(nome);
  },
];

console.log(dados[0]) // String("Tipo 1")
console.log(dados[1]) // ["Carro", "Portas", { cor: "Azul", preco: 200 }]
console.log(dados[1][1]) // Portas
console.log(dados[2]) // function andar(nome)

let li = document.querySelectorAll('li');
console.log(li); // retorna NodeList

li = Array.from(li);
console.log(li); // retorna Array

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Maça']];
console.log(frutas[1]) // Pêra
console.log(frutas[1][1]) // ê 
console.log(frutas[2][1]) // Maça
console.log(frutas[2][1][2]) // ç
frutas.push('Beterraba');
console.log(frutas)

const carros = ['Ford', 'Kia', 'BMW', 'Celta', 'Ferrari', 'Mustang'];
//    index, qntd removida, item add
carros.splice(2, 2, 'Fusca'); 
console.log(carros)

console.log(carros.concat('Ola')) // adicionou mas não modifica o array original

let htmlString = '<h2>Titulo</h2>'
console.log(htmlString)

console.log(htmlString.split('h2').join('a'))

const linguagens = ['css', 'html', 'js', 'php', 'java'];
console.log(linguagens.slice(3)) // php, java
console.log(linguagens.slice(2, 4)) // js, php

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const pizza = comidas.shift();
console.log(pizza);

// Remova o último valor de comidas e coloque em uma variável
const macarrao = comidas.pop();
console.log(macarrao);

// Add 'Arroz' ao final do array
comidas.push('Arroz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao inicio do Array
comidas.unshift('Peixe', 'Batata');
console.log(comidas)

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')); // true
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')); // false

const html = `<section>
                 <div>Sobre</div>
                 <div>Produtos</div>
                 <div>Contato</div>
              </section>`;
// Substitua section por ul e div com li
// utilizando split e join
let novoHtml  = html.split("section").join("ul");
novoHtml = novoHtml.split("div").join("li");
console.log(novoHtml);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve o array original em outra variável

const originalArrayCarros = carros.slice();
carros.pop();
console.log(originalArrayCarros, carros)
