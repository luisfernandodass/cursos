export default function initNumbers(event) {
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
