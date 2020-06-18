import Swiper from 'swiper/js/swiper.js';

export default function videoSlider() {

    return {
        init: () => {
            var videoslide = new Swiper('.video-swiper', {
                spaceBetween: 20,
                loop: false,
                speed: 1500,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                  },
                breakpoints: {
                    320:{
                        slidesPerView: 1,
                        navigation:false,
                    },
                    991: {
                        slidesPerView: 3,
                        navigation: {
                            nextEl: '.video-swiper .swiper-button-next',
                            prevEl: '.video-swiper .swiper-button-prev',
                        },
                        // loopedSlides: 1,
                    },

                }
            }, 500);
            $('#videoslider').on('hidden.bs.modal', function (e) {
                $('#videoslider iframe').attr("src", $("#videoslider iframe").attr("src"));
            });
            var $videoSrc;  
            $('.video-swiper a.icon').click(function() {
                $videoSrc = $(this).data( "src" );
            });

            $('#videoslider').on('shown.bs.modal', function (e) {
                $("#videoslider iframe").attr('src',$videoSrc + "?autoplay=0&amp;modestbranding=1&amp;showinfo=0" ); 
            })
            
            $('#videoslider').on('hide.bs.modal', function (e) {
                $("#videoslider iframe").attr('src',''); 
            }) 
        },

    }
}