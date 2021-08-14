// Abaixo o Bubble é aplicado (ou acho que poderiamos chmar de propagação de eventos)
export default function outsideClick(element, events, callback){
    const hmtl = document.documentElement;
    const outside = 'data-outside';
    
    if(!element.hasAttribute(outside) === false){
        events.forEach(userEvent => {
           setTimeout(() => hmtl.addEventListener(userEvent, handleOutsideClick));
        });
        element.setAttribute(outside, '');
    }
    
    function handleOutsideClick(e){
        if(!element.contains(e.target)){
            element.removeAttribute(outside)
            events.forEach(userEvent => {
                hmtl.removeEventListener(userEvent, handleOutsideClick);
            })
            callback();
        }
    }
}