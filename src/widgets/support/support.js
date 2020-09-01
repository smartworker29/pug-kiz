// let hasVal = document.querySelectorAll('form .form__item input:not([type="hidden"]), form .form__item textarea');

// hasVal.forEach(el => {
//     el.addEventListener('blur', function () {
//         let val = this.value.trim();
//         if (val.length !== 0) {
//             this.classList.add('has-value');
//         } else {
//             this.classList.remove('has-value');
//         }
//     }
//     );
// });


var tel = $('form .form__item input[type=tel]')
tel.each(function(){
    $(this).attr('type','number')
})


$('form .form__item input:not([type="hidden"]), form .form__item textarea').on('blur', function () {
    let val = this.value.trim();
    if (val.length !== 0) {
        this.classList.add('has-value');
    } else {
        this.classList.remove('has-value');
    }
    buttonHighlite(this)
})

$('.text-texarea').on('blur', function (e) {
    $('form button[type=submit]').addClass('btn-secondary');
    if (e.target.value.trim() === '') {
        $(this).removeClass('valid');
        $(this).addClass('error');
    }
    else {
        $(this).addClass('valid');
        $(this).removeClass('error');
    }
    buttonHighlite(this)
});

$('.text-input').on('blur', function (e) {
    $('form button[type=submit]').addClass('btn-secondary');
    if (e.target.value.trim() === '') {
        $(this).removeClass('valid');
        $(this).addClass('error');
    }
    else {
        $(this).addClass('valid');
        $(this).removeClass('error');
    }
    buttonHighlite(this)
});

$('.email-input').on('blur', function (e) {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let result = regExp.test(e.target.value);
    if (!result) {
        $(this).removeClass('valid');
        $(this).addClass('error');
    }
    else {
        $(this).addClass('valid');
        $(this).removeClass('error');
    }
    buttonHighlite(this)
});

$('.custom-dropdown select').on('change', function(){
    if($(this).val() == ""){
        $(this).removeClass('valid has-value').addClass('error');
    }
    else{
        $(this).removeClass('error').addClass('valid has-value');
    }
    buttonHighlite(this)

})

$('.custom-checkbox .custom').on('click', function (e) {
    if($(this).prop('checked') == true){
        $(this).removeClass('error')
    }
    buttonHighlite(this)
})

function buttonHighlite(ele) {
    var inputele = $(ele).parents('form').find('.form__item input:not([type="hidden"])');
    var textareaele = $(ele).parents('form').find('.form__item textarea');
    if($(ele).parents('form').find('.error').length == 0 && inputele != '' && textareaele != '' ){
        $(ele).parents('form').find('.form-footer .btn').addClass('active')
    }
    else{
        $(ele).parents('form').find('.form-footer .btn').removeClass('active')
    }
}

$('form input[type=submit]').on('click', function (e) {
  
    var inputele = $(this).parents('form').find('.form__item input:not([type="hidden"])');
    var textareaele = $(this).parents('form').find('.form__item textarea');
    var dropdown = $(this).parents('form').find('.custom-dropdown select');
    // var checkbox = $(this).parents('form').find('.custom-checkbox .custom');
    inputele.each(function (e, ele) {
        if ($(ele).hasClass('error') || $(ele).val() == '') {
            $(ele).addClass('error')
        }
    })
    textareaele.each(function (e, ele) {
        if ($(ele).hasClass('error') || $(ele).val() == '') {
            $(ele).addClass('error')
        }
    })

    dropdown.each(function(e,ele){
        if ($(ele).val() == '') {
            $(ele).addClass('error')
        }
    })

    // checkbox.each(function(e,ele){
    //     if ($(ele).prop('checked') == false) {
    //         $(ele).addClass('error')
    //     }
    // })

    $(this).parents('form').find('.error').first().focus();


    if ($(this).parents('form').find('.error').length == 0  && textareaele != '' ) {
        $('body,html').animate({scrollTop:($(this).parents('form').offset().top - 60)},500)
        // $(this).parents('form').submit();
    }
})

$('.modal').on('hidden.bs.modal', function (e) {
  $('.form__item').find('input, textarea').val('').removeClass('error valid has-value');
  $('form button[type=submit]').removeClass('btn-secondary');
});


