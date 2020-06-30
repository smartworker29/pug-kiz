import "magnific-popup/dist/jquery.magnific-popup"

$(document).ready(function() {
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

});