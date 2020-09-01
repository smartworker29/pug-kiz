var anchor = (function () {
    var init = function () {
        _customdropdown();
        _anchorfunction();

    },
        _anchorfunction = function () {
            let anchorelink = document.querySelectorAll("[anchor-wrapper]");
            var headerHeight = $("nav").innerHeight();
            var anchorHeight = $(anchorelink).height();
            if(anchorelink){
                $(anchorelink).find('select').on('change', function(e){
                    var target = $(this).val(); 
                    var scrollToPosition = $(target).offset().top - (headerHeight + anchorHeight + 20);
                    $('html').animate({ 'scrollTop': scrollToPosition }, 600);
                    e.preventDefault();
                });
            }
        },
        _customdropdown = function () {
            $("<select />").appendTo(".anchor-link");
            // $("<option />", {
            //     "selected": "selected",
            //     "value": "",
            //     "text": "Select"
            // }).appendTo(".anchor-link select");
            $(".anchor-link a").each(function () {
                var el = $(this);
                $("<option />", {
                    "value": el.attr("href"),
                    "text": el.text()
                }).appendTo(".anchor-link select");
            });
            $("<i class='icon-close'> </i>").appendTo(".anchor-link select")
            $(".anchor-link select").change(function () {
                window.location = $(this).find("option:selected").val();
            });
        }
    return {
        init: init
    };
})();

$().ready(function () {
    anchor.init();
    scrollToActive();
});

function scrollToActive() {
    var lastId,
        topMenu = $(".anchor-link"),
        topMenuHeight = topMenu.outerHeight() + 1,
        topheaderHeight = $('header').outerHeight() + 1,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - (topMenuHeight + topheaderHeight) + 1;
            if($('.anchor-link').parents('.placeholder').hasClass('fixed-anchor')){
                $('html, body').stop().animate({
                    scrollTop: (offsetTop - 0)
                }, 850);
            }
            else{
                $('html, body').stop().animate({
                    scrollTop: (offsetTop - 170)
                }, 850);
            }
        
        e.preventDefault();
    });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight + topheaderHeight + 30;
        var cur = scrollItems.map(function () {
            if (($(this).offset().top - 80) < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
       
            lastId = id;
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
            if(id != ''){
                $('[anchor-wrapper] select').val("#" + id)
            }
            

        }
    });

}