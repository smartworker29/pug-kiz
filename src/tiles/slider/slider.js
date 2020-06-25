import Swiper from 'swiper/js/swiper.js';

export default function swiperCustom() {

    return {
        init: () => {
            var slideitems = $('.swiper-wrapper').data('slide');
            var swiperCustom = new Swiper('.swiper-custom', {
                spaceBetween: 0,
                loop: false,
                speed: 1500,
                centeredSlides: false,
                slidesPerView: slideitems,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-custom .swiper-button-next',
                    prevEl: '.swiper-custom .swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        
                    },
                    991: {
                        slidesPerView: slideitems,
                        // loopedSlides: 1,
                    },
                },

            });
        },
    }
}
