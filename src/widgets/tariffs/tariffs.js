import Swiper from 'swiper/js/swiper.js';

export default function tariffsSlider() {

  return {
    init: () => {
      var mySwiper = undefined;
      function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 992 && mySwiper == undefined) {
          mySwiper = new Swiper('.swiper-container.plans-swiper', {
            loop: true,
            speed: 1500,
            centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            },
            autoplay: {
              delay: 3000,
            },
            breakpoints: {
              320:{
                slidesPerView: 1,
              },
            }
          });
        } else if (screenWidth > 991 && mySwiper != undefined) {
          mySwiper.destroy();
          mySwiper = undefined;
          jQuery('.plans-swiper .swiper-wrapper').removeAttr('style');
          jQuery('.plans-swiper .swiper-slide').removeAttr('style');
        }
      }

      initSwiper();

      $(window).on('resize', function(){
        initSwiper();
      });
    }
  }
}