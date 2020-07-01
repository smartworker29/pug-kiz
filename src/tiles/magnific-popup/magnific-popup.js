import "magnific-popup/dist/jquery.magnific-popup"

$(document).ready(function() {
  if($('.image-popup').length > 0){
    $('.image-popup').magnificPopup({ 
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element.find('img');
            }
          }
    });
  }
});