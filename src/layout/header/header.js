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
});
window.onscroll = function() {addClasstoElementOnScroll()};
var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
function addClasstoElementOnScroll(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-top");
    } else {
        navbar.classList.remove("sticky-top");
    }
}