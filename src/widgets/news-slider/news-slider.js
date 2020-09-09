import Swiper from 'swiper/js/swiper.js';

export default function newsSlider() {

  return {
    init: () => {
      let conf = {
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1500: {
            allowTouchMove: false,
            spaceBetween: 24,
          },
          992: {
            allowTouchMove: true,
            spaceBetween: 24,
          },
          576:{
            spaceBetween: 20,
            slidesPerView: 2.25,
          },
          320: {
            slidesPerView: 1.25,
            spaceBetween: 16,
          }
        }
      };
      var swiper = new Swiper('.news-slider .swiper-container', conf);

    },

  }
}
