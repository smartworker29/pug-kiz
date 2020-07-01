import "magnific-popup/dist/jquery.magnific-popup"

$(document).ready(function() {
  if($('.zoom-icon').length > 0){
    $('.zoom-icon').magnificPopup({ 
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element;
            }
          }
    });
  }
});