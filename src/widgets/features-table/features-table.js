$('.features-btn').click(function() {
  var obj = $(".features-table tr:hidden");
  for ( let i = 0; i < obj.length; i++ ){
    setTimeout( function timer(){
      $(obj[i]).show();
    }, i*100 );
  }
  $('.features-table__btn').hide();
});

