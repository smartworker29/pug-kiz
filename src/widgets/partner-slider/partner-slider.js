import Swiper from 'swiper/js/swiper.js';

export default function partnerSlider() {

    return {
        init: () => {
            let conf = {
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.partner-slider .swiper-button-next',
                    prevEl: '.partner-slider .swiper-button-prev',
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                    },
                    320: {
                        spaceBetween: 10,
                    }
                }
            }
            var swiper = new Swiper('.partner-slider .swiper-container', conf);
        },

    }
}