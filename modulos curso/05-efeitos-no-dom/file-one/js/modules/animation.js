export default function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.5;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
      
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          item.classList.add("ativo");
        } else if(item.classList.contains("ativo")) {
          item.classList.remove("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimationScroll();