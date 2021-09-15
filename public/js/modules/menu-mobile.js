import outsideClick from "./outsideclick.js";

// Abaixo o Bubble é aplicado (ou acho que poderiamos chmar de propagação de eventos)
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu() {
      menuButton.classList.add("active");
      menuList.classList.add("active");
      outsideClick(menuList, eventos, () => {
        console.log("click");

        menuButton.classList.remove("active");
        menuList.classList.remove("active");
      });
    }
    eventos.forEach((evento) => menuButton.addEventListener("click", openMenu));
  }
}

/*
import outsideClick from './outsideclick.js'

// Abaixo o Bubble é aplicado (ou acho que poderiamos chmar de propagação de eventos)
export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    
    function openMenu(){
        menuButton.classList.add('active');
        menuList.classList.add('active');
        
    }
     menuButton.addEventListener('click', openMenu);   
    
}

initMenuMobile();
*/
