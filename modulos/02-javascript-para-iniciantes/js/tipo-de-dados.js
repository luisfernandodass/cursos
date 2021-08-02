var nome = 'Luis';
var idade = 18;
var simbolo = Symbol();
console.log(typeof nome, typeof idade, typeof simbolo);

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols * 2} gols`; // Isso é template string

console.log(frase2);

var sobrenome = 'Fernando';
var nomeCompleto = `${nome} ${sobrenome}`;

var frase = `It's time`;

var verificarTipoNome = typeof nomeCompleto;

console.log(verificarTipoNome);