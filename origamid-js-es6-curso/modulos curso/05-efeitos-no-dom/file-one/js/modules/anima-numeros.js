export default function initAnimaNumeros(event) {}

function numeros(event) {
  const numeros = document.querySelectorAll("[data-numero]");
  const containerNumeros = document.querySelector(".numeros"); // useless line
 
  if (containerNumeros.offsetTop) {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total; // truque para ir p/ número certo
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
}

numeros();

/*
function handleMutation(mutation) {
    if (mutation.target.classList.contains("ativo")) {
      observer.disconnect();
      console.log('epa')
      animaNumeros();
    }
  }
  
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, {attributes: true });
*/
