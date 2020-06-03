$('.footer-link h4').on('click', function(){
    $(this).next().slideToggle().parent().siblings().find('ul').slideUp();
})