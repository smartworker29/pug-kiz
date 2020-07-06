
  let infoCardBtn = $('.info-card-btn');
  let infoCardClose = $('.info-card__close');
  $(infoCardBtn).click(function( event ) {
    event.preventDefault();
  });
  if (infoCardBtn) {
    [].map.call(infoCardBtn, function (list) {
      list.onclick = e => {
        $(list).parent().parent().parent('.info-card__wrap').addClass('active');
      }
    });
  }
  if (infoCardClose) {
    [].map.call(infoCardClose, function (list) {
      list.onclick = e => {
        $(list).parent().parent().parent().parent('.info-card__wrap').removeClass('active');
      }
    });
  }