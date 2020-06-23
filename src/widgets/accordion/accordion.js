var accordion = (function () {
    var init = function () {
        _accordion();
    },
    
    _accordion = function () {
        let listaccordion = document.querySelectorAll("[accordion-wrapper]");
        if(listaccordion){
            [].map.call(listaccordion, function (items) {
                let accordianitem = $(items).find('.accordion-tiles a')
                if(accordianitem){
                    [].map.call(accordianitem, function (list) {
                        list.onclick = e => {
                            if($(list).parent().hasClass('active')){
                                $(list).parent().removeClass('active');
                                $(list).next().slideUp()
                            }
                            else{
                                $(list).parent().addClass('active').siblings().removeClass('active');
                                $(list).next().slideDown().parent().siblings().find('.accordion-content').slideUp();
                            }
                        }
                    });
                }
            });
        }
    }
    return {
        init: init
    };
})();

$().ready(function () {
    accordion.init();
});
