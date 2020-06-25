import Swiper from 'swiper/js/swiper.js';

export default function licenseSlider() {

  return {
    init: () => {
      console.log('init')
      var license = new Swiper('.license-swiper', {
        spaceBetween: 20,
        loop: true,
        speed: 1500,
        centeredSlides: true,
        navigation: {
          nextEl: '.license-swiper .swiper-button-next',
          prevEl: '.license-swiper .swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
          320:{
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 2.3,
            navigation: {
              nextEl: '.license-swiper .swiper-button-next',
              prevEl: '.license-swiper .swiper-button-prev',
            },
            // loopedSlides: 1,
          },

        }
      }, 500);
    },

  }
}