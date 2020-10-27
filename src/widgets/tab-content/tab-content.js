$(document).on('click', '.tab-wrapper .nav-tabs a', function(){
    var scrollval = $(this).parents('.nav-tabs').scrollLeft()
   var scrollleft =  $(this).parents('.nav-tabs').find('a.active').offset().left
   var scrollposition = scrollval + scrollleft
   $(this).parents('.nav-tabs').scrollLeft(scrollposition)
//    this.parentNode.parentElement.offsetLeft += scrollleft 
})