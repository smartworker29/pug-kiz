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
            $(anchorelink).find('a').click(function(e){
                $(this).parent().addClass('active').siblings().removeClass('active');
                var target = $(this).attr("href"); 
                var scrollToPosition = $(target).offset().top - (headerHeight + anchorHeight);
                $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(target){
                    window.location.hash = target;
                });
                
                // e.preventDefault();
            });
            
            $(anchorelink).find('select').on('change', function(e){
                var target = $(this).val(); 
                var scrollToPosition = $(target).offset().top - (headerHeight + anchorHeight);
                $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(target){
                    window.location.hash = target;
                });
                e.preventDefault();
            });
        }
    },
    _customdropdown = function(){
        $("<select />").appendTo(".anchor-link");
        $("<option />", {
            "selected": "selected",
            "value"   : "",
            "text"    : "Select"
        }).appendTo(".anchor-link select");
        $(".anchor-link a").each(function() {
            var el = $(this);
            $("<option />", {
            "value"   : el.attr("href"),
            "text"    : el.text()
            }).appendTo(".anchor-link select");
        });
        $("<i class='icon-close'> </i>").appendTo(".anchor-link select")
        $(".anchor-link select").change(function() {
            window.location = $(this).find("option:selected").val();
        });
    }
    return {
        init: init
    };
})();

$().ready(function () {
    anchor.init();
});

