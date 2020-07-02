var accordionStr = (function () {
  var init = function () {
        _accordion();
      },

      _accordion = function () {
        let listaccordion = document.querySelectorAll("[strategic-accordion-wrapper]");
        if(listaccordion){
          [].map.call(listaccordion, function (items) {
            $( ".accordion-strategic a" ).click(function( event ) {
              event.preventDefault();
            });
            let accordianitem = $(items).find('.accordion-strategic a');
            accordianitem.next().addClass('accordion-content');
            if(accordianitem){
              [].map.call(accordianitem, function (list) {
                list.onclick = e => {
                  if($(list).parent().hasClass('active')){
                    $(list).parent().removeClass('active');
                    $(list).next().slideUp();
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
  accordionStr.init();
});