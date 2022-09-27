const div = document.querySelector('div');

const d = fetch("./dados.json")
.then(r => r.json())
.then(r2 => {
    const txt = JSON.stringify(r2);
    div.innerText = txt;
    console.log(JSON.stringify(r2))
})