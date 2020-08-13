var header = (function () {
    var init = function () {
        _megaMenu();
        _stopPropagation();
    },
    
    _megaMenu = function () {
        let windowWidth = $(window).width()
        let listitem = document.querySelectorAll("[listitem-toggle]");
        let megaback = document.querySelectorAll("[mega-back]");
        if(listitem){
            [].map.call(listitem, function (items) {
                var itemname = $(items).find('a').attr('data-id').replace('#','');
                if(windowWidth > 1200){
                    var dropdown = $(items).parent().next();
                    $(items).on('mouseenter', function(){
                        
                        $(items).parents('.nav-list').find('.dropdown-wrapper').addClass('show');
                        $(items).parents('.nav-list').find('.dropdown-wrapper #' + itemname).addClass('active').siblings().removeClass('active');
                    
                    })
                    $(items).on('mouseleave', function(){
                        $(items).parents('.nav-list').find('.dropdown-wrapper').removeClass('show');
                    })
                    $(dropdown).on('mouseover', function(){
                        $(items).parents('.nav-list').find('.dropdown-wrapper').addClass('show');
                    })
                    $(dropdown).on('mouseleave', function(){
                        $(items).parents('.nav-list').find('.dropdown-wrapper').removeClass('show');
                    })
                }
                else{
                    
                    $(items).find('a').attr('href', 'javascript:void(0)');
                    items.onclick = e => {
                        $(items).parents('.nav-list').find('.dropdown-wrapper #'+itemname).addClass('open');
                        $(items).parents('.nav-list').addClass('active');
                        $('.back-menu').addClass('d-flex');
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
    addClasstoElementOnScroll()
});
window.onscroll = function() {
    addClasstoElementOnScroll();
    stickanchor();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function addClasstoElementOnScroll(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-top");
    } else {
        navbar.classList.remove("sticky-top");
    }
}
// window.onscroll = function() {stickanchor()};
let anchorlink = document.querySelectorAll("[anchor-wrapper]");
let headerbar = document.querySelectorAll('#navbar')
let offset = $(anchorlink).length ? $(anchorlink).offset().top : '';
stickanchor();

function stickanchor(){
    if (window.pageYOffset >= (offset - $(headerbar).height())) {
        $(anchorlink).parents('.placeholder').addClass("fixed-anchor");
    } else {
        $(anchorlink).parents('.placeholder').removeClass("fixed-anchor");
    }
}


