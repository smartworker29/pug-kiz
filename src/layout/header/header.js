var header = (function () {
    var init = function () {
        _megaMenu();
        _stopPropagation();
    },
    
    _megaMenu = function () {
        let windowWidth = $(window).width()
        let listitem = document.querySelectorAll("[listitem-toggle]");
        let megaback = document.querySelectorAll("[mega-back]");
        let menuClose = document.querySelectorAll("[menu-toggler]");
        if(listitem){
            [].map.call(listitem, function (items) {
                var itemname = $(items).find('a').attr('data-id').replace('#','');
                if(windowWidth > 1200){ 
                  
                    var dropdown = $(items).parent().next();
                    var listitems = $(items).parents('.nav-list').find('.dropdown-wrapper #' + itemname).find('.cluster-links a').length
                    if(listitems > 1){
                        $(items).find('a').attr('href', 'javascript:void(0)');
                    }
                    
                    $(items).on('click', function(){
                        if($(items).parents('.nav-list').find('.dropdown-wrapper #' + itemname).find('.cluster-links a').length > 1){
                            if(!$(items).hasClass('active')){
                                $(items).addClass('active').siblings().removeClass('active')
                                $(items).parents('.nav-list').find('.dropdown-wrapper').addClass('show');
                                $(items).parents('.nav-list').find('.dropdown-wrapper #' + itemname).addClass('active').siblings().removeClass('active');
                            }
                            else{
                                $(items).removeClass('active')
                                $(items).parents('.nav-list').find('.dropdown-wrapper').removeClass('show');
                            }
                        }
                    })
                    // $(items).on('mouseleave', function(){
                    //     $(items).parents('.nav-list').find('.dropdown-wrapper').removeClass('show');
                    // })
                    // $(dropdown).on('mouseover', function(){
                    //     $(items).parents('.nav-list').find('.dropdown-wrapper').addClass('show');
                    // })
                    // $(dropdown).on('mouseleave', function(){
                    //     $(items).parents('.nav-list').find('.dropdown-wrapper').removeClass('show');
                    // })
                }
                else{
                   
                    var listitems = $(items).parents('.nav-list').find('.dropdown-wrapper #' + itemname).find('.cluster-links a').length
                    items.onclick = e => {
                        $(items).parents('.nav-list').find('.dropdown-wrapper #'+itemname).addClass('open');
                        $(items).parents('.nav-list').addClass('active');
                        $('.back-menu').addClass('d-flex');
                    }
                    if(listitems > 1){
                        $(items).find('a').attr('href', 'javascript:void(0)');
                    }
                    else{
                        $(items).find('a').find('i').remove();
                    }
                    
                }
                
            });
        }
        if(megaback){
            [].map.call(megaback, function (back) {
                back.onclick = e => {
                    $('.nav-list').removeClass('active');
                    $('.nav-list').find('.cluster-container').removeClass('open');
                    $('.back-menu').removeClass('d-flex');
                }
            });
        }
        if(menuClose){
            [].map.call(menuClose, function (close) {
                close.onclick = e => {
                    if(windowWidth < 1200){ 
                        
                        $('.back-menu').removeClass('d-flex');
                        $('nav .nav-list').removeClass('active');
                        $('nav .cluster-container.open').removeClass('open');
                    }
                }
            });
        }

        $('body').on("click", function (e) {
            if(!$(e.target).closest('.dropdown-wrapper').length && !$(e.target).closest('.nav-list ul').length){
                $(listitem).removeClass('active')
                $(listitem).parents('.nav-list').find('.dropdown-wrapper').removeClass('show');
            }
            
        });
    },
    _stopPropagation = function () {
        $('[stop-propagation]').on("click", function (e) {
            e.stopPropagation();
        });
    }
    return {
        init: init
    };
})();

$().ready(function () {
    header.init();
    //addClasstoElementOnScroll()
});
$(window).on('load', (event) => {
    var url = window.location.hash
    if(url != ""){
        var locations = url.replace('#','')
        var offsetTopURL = $('#' + locations).offset().top
        //  var header = $('.navbar').outerHeight() + 1
        //  var anchor = $('[anchor-wrapper]').outerHeight() + 1
        //  var topbarCalc = header + anchor
        
        setTimeout(() => {
            var topoffset = 170
            if(window.innerWidth > 1200){
                topoffset = 200
            }
            $('html, body').stop().animate({
                scrollTop: (offsetTopURL - topoffset)
            }, 850); 
        }, 300);
        
    }
})
// window.onscroll = function() {
//     addClasstoElementOnScroll();
//     stickanchor();
// };
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
// function addClasstoElementOnScroll(){
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky-top");
//     } else {
//         navbar.classList.remove("sticky-top");
//     }
// }
// window.onscroll = function() {stickanchor()};
// let anchorlink = document.querySelectorAll("[anchor-wrapper]");
// let headerbar = document.querySelectorAll('#navbar')
// let offset = $(anchorlink).length ? $(anchorlink).offset().top : 0;
// stickanchor();

// function stickanchor(){
//     if (window.pageYOffset >= (offset - $(headerbar).height())) {
//         $(anchorlink).parents('.placeholder').addClass("fixed-anchor");
//     } else {
//         $(anchorlink).parents('.placeholder').removeClass("fixed-anchor");
//     }
// }


