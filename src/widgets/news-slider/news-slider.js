import Swiper from 'swiper/js/swiper.js';

export default function newsSlider() {

  return {
    init: () => {
      let conf = {
        slidesPerView: 1.10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1500: {
            allowTouchMove: false,
            spaceBetween: 24,
            slidesPerView: 3,
          },
          992: {
            allowTouchMove: true,
            spaceBetween: 24,
            slidesPerView: 3,
          },
          576:{
            spaceBetween: 20,
            slidesPerView: 2.10,
          },
          320: {
            slidesPerView: 1.10,
            spaceBetween: 16,
          }
        }
      };
      var swiper = new Swiper('.news-slider .swiper-container', conf);

    },

  }
}
