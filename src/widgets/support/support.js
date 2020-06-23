let hasVal = document.querySelectorAll('form .support-input');

hasVal.forEach(el => {
  el.addEventListener('blur', function () {
        let val = this.value.trim();

        if (val.length !== 0) {
          this.classList.add('has-value');
        } else {
          this.classList.remove('has-value');
        }
      }
  );

});

$('.text-input').on('blur', function(e) {
  $('form button[type=submit]').addClass('btn-secondary');
  if(e.target.value.trim() === ''){
    $(this).removeClass('valid');
    $(this).addClass('error');
  }
  else{
    $(this).addClass('valid');
    $(this).removeClass('error');
  }
});

$('.email-input').on('blur', function(e) {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  let result = regExp.test(e.target.value);

  if(!result){
    $(this).removeClass('valid');
    $(this).addClass('error');
  }
  else{
    $(this).addClass('valid');
    $(this).removeClass('error');
  }

});


$('.modal').on('hidden.bs.modal', function (e) {
  $('.support-input').val('').removeClass('error valid has-value');
  $('form button[type=submit]').removeClass('btn-secondary');
});


