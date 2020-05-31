import Swiper from 'swiper/js/swiper.js';

export default function siblingHover() {

    return {
        init: () => {
            var interleaveOffset = 0.5;
            var thumbnumber = $('.gallery-thumbs .swiper-slide').length;
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 0,
                slidesPerView: 3,
                loop: false,
                freeMode: false,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    allowTouchMove: true
                  },
                    768: {
                        slidesPerView: thumbnumber,
                        spaceBetween: 0,
                        allowTouchMove: false
                    }
                },
                
            });
            setTimeout(function(){
            var galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 0,
                loop: false,
                speed: 1500,
                centeredSlides: false,
                
                thumbs: {
                    swiper: galleryThumbs,
                },
                navigation: {
                    nextEl: '.gallery-thumbs .swiper-button-next',
                    prevEl: '.gallery-thumbs .swiper-button-prev',
                },
                breakpoints: {
                    320:{
                      pagination: {
                        el: '.swiper-pagination',
                      },
                    },
                    991: {
                        slidesPerView: 1,
                        pagination:'flase',
                        // loopedSlides: 1,
                    },

                },
                on: {
                    progress: function() {
                      var swiper = this;
                      for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".container").style.transform =
                          "translate3d(" + innerTranslate + "px, 0, 0)";
                      }      
                    },
                    touchStart: function() {
                      var swiper = this;
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                      }
                    },
                    setTransition: function(speed) {
                      var swiper = this;
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".container").style.transition =
                          speed + "ms";
                      }
                    },
                  }
            });
            }, 500);
            $('body').on('click','.swiper-button-disabled',(e)=>{
              e.preventDefault();
              return false;
            });
        },

    }
}
