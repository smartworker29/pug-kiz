var header = (function () {
    var init = function () {
        _megaMenu();
        _stopPropagation();
    },
    
    _megaMenu = function () {
        let listitem = document.querySelectorAll("[listitem-toggle]");
        let megaback = document.querySelectorAll("[mega-back]");
        if(listitem){
            [].map.call(listitem, function (items) {
                items.onclick = e => {
                    if($(items).parent().hasClass('open')){
                        $(items).parent().removeClass('open');
                    }
                    else{
                        $(items).parent().addClass('open');
                        $(items).parents('#header-nav').addClass('sub-menu-active')
                    }
                }
            });
        }
        if(megaback){
            [].map.call(megaback, function (back) {
                back.onclick = e => {
                    $(back).closest('li').removeClass('open');
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
let offset = $(anchorlink).offset().top;
stickanchor();

function stickanchor(){
    if (window.pageYOffset >= (offset - $(headerbar).height())) {
        $(anchorlink).parents('.placeholder').addClass("fixed-anchor");
    } else {
        $(anchorlink).parents('.placeholder').removeClass("fixed-anchor");
    }
}