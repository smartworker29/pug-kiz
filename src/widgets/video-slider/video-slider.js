import Swiper from 'swiper/js/swiper.js';

export default function videoSlider() {

    return {
        init: () => {
            const enableSwiper = function() {
            var videoslide = new Swiper('.video-swiper', {
                spaceBetween: 20,
                loop: false,
                speed: 1500,
                centeredSlides: false,
                pagination: {
                    el: '.video-swiper .swiper-pagination',
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
            });

        }

            const breakpoint = window.matchMedia( '(min-width:992px)' );

            let mySwiper;
            const breakpointChecker = function() {
                if ( breakpoint.matches === true ) {
                    return enableSwiper();
                
                } else if ( breakpoint.matches === false ) {
                    if ( mySwiper !== undefined ) 
                        mySwiper.destroy( true, true );
                        return;
                }
            };

            $('#videoslider').on('hidden.bs.modal', function (e) {
                $('#videoslider iframe').attr("src", $("#videoslider iframe").attr("src"));
            });
            var $videoSrc;  
            $('.video-swiper a.icon').click(function() {
                debugger
                $videoSrc = $(this).data( "src" );
                $("#videoslider iframe").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
            });

            // $('#videoslider').on('shown.bs.modal', function (e) {
            //     $("#videoslider iframe").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
            // })
            
            $('#videoslider').on('hide.bs.modal', function (e) {
                $("#videoslider iframe").attr('src',''); 
            }) 

            breakpoint.addListener(breakpointChecker);
            breakpointChecker();


        },

    }
}