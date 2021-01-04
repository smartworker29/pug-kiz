import Swiper from 'swiper/js/swiper';

export default function partnerSlider() {

    return {
        init: () => {
            let conf = {
                navigation: {
                    nextEl: '.partner-slider .swiper-button-next',
                    prevEl: '.partner-slider .swiper-button-prev',
                },
                spaceBetween: 30,
                slidesPerView: 2.80,
                loop:true,
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
            if($(window).width() > 1200){
                if($('.partner-slider .swiper-slide').length < 7){
                    $('.partner-slider .swiper-container').css({'margin':'0', 'width':'100%'});
                    $('.partner-slider .swiper-button-wrapper').hide();
                }
            }
            var swiper = new Swiper('.partner-slider .swiper-container', conf);
        },

    }
}

// $().ready(function () {
    
// });