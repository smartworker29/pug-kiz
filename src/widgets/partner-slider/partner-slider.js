import Swiper from 'swiper/js/swiper';

export default function partnerSlider() {

    return {
        init: () => {
            let conf = {
                navigation: {
                    nextEl: '.partner-slider .swiper-button-next',
                    prevEl: '.partner-slider .swiper-button-prev',
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                    320: {
                        spaceBetween: 30,
                        slidesPerView: 2.80,
                    }
                }
            }
            var swiper = new Swiper('.partner-slider .swiper-container', conf);
        },

    }
}