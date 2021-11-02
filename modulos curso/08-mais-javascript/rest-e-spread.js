/**
function area(lado, totalLados){
    totalLados = totalLados || 1;
    return lado / totalLados;
}

console.log(area(2, 2))
console.log(area(2))

const numeroMaximo = [4, 5, 8, 20, 10, 23, 21, 59, 19, 16];

const numerosMaxSpread = Math.max(...numeroMaximo)

console.log(numerosMaxSpread)

// EXERCICIOS

// Reescreva a função utilizando valores iniciais de parâmetros com ES6
function createButton(background = 'silver', color = 'blue'){
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}

const redButton = createButton();
const btnStyle = getComputedStyle(redButton);
const {color, backgroundColor} = btnStyle;
console.log(color, backgroundColor)

// Utiliza o método push para inserir as frutas ao final de comidas
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

const frutasEComidas = [...comidas, ...frutas]
const frutasEComidasPush = comidas;
frutasEComidasPush.push(...frutas)

console.log(frutasEComidasPush)
console.log(frutasEComidas)
 */
