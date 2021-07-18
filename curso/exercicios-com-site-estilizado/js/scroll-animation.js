/*
const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.5;

if (sections.length) {
  function animaScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      //console.log(sectionTop) // 10.6466
      //console.log(Math.floor(sectionTop)) // 10
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        item.classList.add("ativo");
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
*/