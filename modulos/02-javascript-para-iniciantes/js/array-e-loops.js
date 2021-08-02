var videogame = ['Switch', 'PS5', 'Xbox'];

for(var item = 0; item < videogame.length; item++){
 
  if(videogame[item] === 'Xbox'){
    break; // quebra/para ao chegar no Xbox 
  }
  console.log(videogame[item]); // retorna até o PS5
}

// forEach, executa uma function p/ cada item do array

var frutas = ['banana', 'maça', 'pera', 'uva']
frutas.forEach(function(fruta, index){ // esse parâmetro 'fruta' vira o valor do array
  console.log(fruta, index)
})

console.log(videogame);
videogame.pop(); // retorna e remove o último item do array
console.log(videogame);

videogame.push('Batata'); // add um item na última posição do array
console.log(videogame);
console.log(videogame.length); // retorna a qtnd de items no array

var i = 0;
for(i; i <= 5; i++){ // retorna 0 - 5 
  console.log(i);
}

while(i <= 17){ // retorna 6 - 17 
  console.log(i);
  i++;
}

// Crie um array com os anos que o Brasil ganhou a copa
var yearWon = [1959, 1962, 1970, 1994, 2002]
// Interaja com o array utilizando um loop, para mostrar
// no console a seguinte mensagem, "O Brasil ganhou a copa de ${ano}"
yearWon.forEach(function(year){
  console.log(`O Brasil ganhou a copa de ${year}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera' , 'Uva', 'Melância']

for(var fruta = 0; fruta < frutas.length; fruta++){
  if(frutas[fruta] === 'Pera'){
    break;
  }
  console.log(frutas[fruta]) // retorna apenas Banana e maça
}
// Coloque a última fruta do array acima em uma variável
// sem removar a mesma do array

var lastFruit = frutas[frutas.length - 1]; // retorna o último item sem remove-lo
console.log(lastFruit)