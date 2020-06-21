import MultiClamp from 'multi-clamp';

export default function map(){

    return {
        init:()=> {
            var clampElemns = document.querySelectorAll('[clamp-text]');
            if(clampElemns){
                [].map.call(clampElemns , (elem) => {
                    new MultiClamp(elem , {
                        ellipsis: '...',
                        clamp: parseInt(elem.getAttribute('clamp-text'))
                    });
                })
            }
        }
    }
}
