export default function initFetchBitcoins(){

}

fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(json => {
    const span = document.querySelector('.btc-preco');
    span.innerText = (json.RL.last / 10).toFixed(2);
}).catch(() => {
    const span = document.querySelector('.btc-preco');
    span.innerText = 'ERROR!';
})

// btcPreco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}); 