export function init() {
    console.log("header is saying hiiiiiii")
    var header = document.querySelector("header");
    if(header){
        addClasstoElementOnScroll(header);
    }
    
    
}

function addClasstoElementOnScroll(element){
    window.addEventListener('scroll', function () {
       
        if (element.offsetTop !== 0) {
            if (!element.classList.contains('scrolled')) {
                element.classList.add('scrolled');
            }
        } else {
            element.classList.remove('scrolled');
        }

    });
}
