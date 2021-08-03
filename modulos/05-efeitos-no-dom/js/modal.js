function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]')

    function abrirModal(e) {
        e.preventDefault();
        containerModal.classList.toggle('ativo')
    }

    botaoAbrir.addEventListener('click', abrirModal)

    function fecharModal(){
        containerModal.classList.remove('ativo')
    }

    botaoFechar.addEventListener('click', fecharModal) 
    
    function fecharClicandoForaDoModall(e){
        if(e.target === this){
            containerModal.classList.remove('ativo')
        }
    }

    containerModal.addEventListener('click', fecharClicandoForaDoModall) 

}

initModal()