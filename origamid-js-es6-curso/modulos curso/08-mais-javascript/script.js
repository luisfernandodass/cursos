/*
// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'))

// Crie uma IIFE e isole o escopo de qualquer código JS
var EPA = 'Epa';
(() => {
    var a = 'Epa';
    console.log(a)
})();

// Como podemos utilizar a função abaixo
const active = callback => callback;
console.log(active('o'))

const active2 = function(callback){
    return callback;
}

console.log(active2('o'))

function createObj(name, age, address){
    return {
        name: name,
        age: age,
        address: address,
        toWalk: () => {
            return `${name} andou`
        }
    }
}

const personData = createObj('Luis', 18, 'Rua Luis Aletto');
console.log(personData.toWalk())

function Pessoa(name){
    if(!(this instanceof Pessoa)){
        return new Pessoa(name)
    } else{
        return 'NO'    
    }
}

Pessoa.prototype.andar = () =>{
    return `${this.name} andou`
}

const designer = Pessoa('Luis')

console.log(designer)

function $$(elementosSelecionados){
    const el = document.querySelectorAll(elementosSelecionados);

    function hide(){
        el.forEach(e => {
            e.style.display = 'none';
        })
        return this;
    }

    function show(){
        el.forEach(e => {
            e.style.display = 'block';
        })
        return this;
    }

    function on(onEvent, callback){
        el.forEach(e => {
            e.addEventListener(onEvent, callback)
        })
        return this;
    }

    return {
        el,
        hide,
        show,
        on
    }
}

const _el = $$('button');
_el.hide();
setTimeout(() => _el.show(), 5000)

_el.on('click', (event) => {
    console.log(event.target)
})
*/

let item1 = 1;
function funcao1(){
    let item2 = 2;
    function funcao2(){
        let item3 = 3;
    }
    funcao2()
}

funcao1()