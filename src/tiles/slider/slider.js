import Swiper from 'swiper/js/swiper.js';

export default function swiperCustom() {

    return {
        init: () => {
            var sliders = $('.swiper-custom')
            if (sliders) {
                [].map.call(sliders, function (items, index) {
                    debugger
                    var classlist = items.classList[0]
                    var item = $(items).find('.swiper-pagination').addClass(classlist + index)
                    var nextitem = $(items).find('.swiper-button-next').addClass(classlist + index)
                    var previtem = $(items).find('.swiper-button-prev').addClass(classlist + index)
                    var slideitems = $(items).find('.swiper-wrapper').data('slide');
                    var itemSpacing = $(items).find('.swiper-wrapper').data('space');
                    var swiperCustom = new Swiper(items, {
                        spaceBetween: itemSpacing,
                        loop: false,
                        speed: 1500,
                        centeredSlides: false,
                        slidesPerView: slideitems,
                        pagination: {
                            el: item,
                          },
                        navigation: {
                            nextEl: nextitem,
                            prevEl: previtem,
                        },

                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: slideitems,
                            },
                        },

                    });
                    if ($(items).find('.swiper-slide').length < 2) {
                        $(items).parent().addClass('disable-carousel');
                    }


                });
            }
        },
    }
}
