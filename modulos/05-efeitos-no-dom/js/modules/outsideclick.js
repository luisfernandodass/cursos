// Abaixo o Bubble é aplicado (ou acho que poderiamos chmar de propagação de eventos)
export default function outsideClick(element, events, callback){
    const hmtl = document.documentElement;
    const outside = 'data-outside';
    if(element.hasAttribute('[data-outside]') === false){
        events.forEach(userEvent => {
            hmtl.addEventListener(userEvent, handleOutsideClick)
        });
        element.setAttribute("data-outside", '');
    }
    
    function handleOutsideClick(e){
        if(!element.contains(e.target)){
            element.removeAttribute("data-outside")
            events.forEach(userEvent => {
                hmtl.removeEventListener(userEvent, handleOutsideClick);
            })
            callback();
        }
    }
}