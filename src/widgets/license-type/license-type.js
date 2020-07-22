import Swiper from 'swiper/js/swiper.js';

export default function licenseSlider() {

  return {
    init: () => {
      var mySwiper = undefined;
      function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 992 && mySwiper == undefined) {
          mySwiper = new Swiper('.swiper-container.license-swiper', {
            loop: true,
            speed: 1500,
            centeredSlides: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            breakpoints: {
              320:{
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 1.7,
              },

            }
          });
        } else if (screenWidth > 991 && mySwiper != undefined) {
          mySwiper.destroy();
          mySwiper = undefined;
          jQuery('.license-swiper .swiper-wrapper').removeAttr('style');
          jQuery('.license-swiper .swiper-slide').removeAttr('style');
        }
      }

      initSwiper();

      $(window).on('resize', function(){
        initSwiper();
      });
    }
  }
}
