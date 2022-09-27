export default function initAccordion() {
  // JS NO FAQ
  const accordinList = document.querySelectorAll(".js-accordion dt");
  accordinList[0].classList.add("ativo"); // primeiro item ativo (já fiz isso via DOM)
  accordinList[0].nextElementSibling.classList.add("ativo"); // primeiro item ativo (já fiz isso via DOM)

  function activeAccordinList() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
    // item.nextElementSibling.classList.remove('faq-ativo');
  }

  accordinList.forEach((item) => {
    item.addEventListener("click", activeAccordinList);
  });
}
