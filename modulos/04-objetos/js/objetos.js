const carro = {
    rodas: 4,
    init(valor){
        this.marca = valor;
        return this;
    },
    acelerar(){
        return this.marca + ' acelerou';
    },
    buzinar(){
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro);
honda.init('Fusca');
console.log(honda.acelerar())


const automovel = {
    acelerar(){
        return 'acelerou'
    },
    buzinar(){
        return 'buzinou'
    }
}

const moto = {
    rodas: 2,
    capacete: true
}

const carro2 = {
    rodas: 4,
    portamala: true
}

console.log(Object.assign(moto, automovel))

const moto2 = {}
Object.defineProperties(moto2, {
    rodas: {
        value: 3 // esse valor não tem como mudar
    },
})

console.log(moto2)

// EXERCICIOS
// Crie uma função que verifique corretamente o tipo de dado
function verifyTypeOfData(){
    console.log(Object.prototype.toString.call([]))
}
verifyTypeOfData()

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {}

Object.defineProperties(quadrado, {
    lados: {
        value: 4
    }
})
quadrado.lados = 5; // aqui não vai pois não pode modificar
quadrado.lado = 9; // aqui vai pois é criada uma nova propriedade
console.log(quadrado)

// Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 6000,
    background: '#333'
}

Object.preventExtensions(configuracao); // ou Object.freeze(configurcao)
configuracao.altura = 10; // propriedade não adicionada por causa do preventExtension

console.log(configuracao)

// Liste o nome de todas as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String)) // ou String.prototype
console.log(Object.getOwnPropertyNames(Array)) // ou Array.prototype