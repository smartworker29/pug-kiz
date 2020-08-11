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
    if($(ele).parents('form').find('.error').length == 0){
        $(ele).parents('form').find('.form-footer .btn').removeClass('active')
    }
    else{
        $(ele).parents('form').find('.form-footer .btn').addClass('active')
    }
}

$('form button[type=submit]').on('click', function (e) {
    e.preventDefault();
    var inputele = $(this).parents('.form').find('.form__item input:not([type="hidden"])');
    var textareaele = $(this).parents('.form').find('.form__item textarea');
    var dropdown = $(this).parents('.form').find('.custom-dropdown select');
    var checkbox = $(this).parents('.form').find('.custom-checkbox .custom');
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

    checkbox.each(function(e,ele){
        if ($(ele).prop('checked') == false) {
            $(ele).addClass('error')
        }
    })

    $(this).parents('form').find('.error').first().focus();


    if ($(this).parents('form').find('.error').length == 0 && inputele != '' && textareaele != '' ) {
        $(this).parents('form').submit();
    }
})

$('.modal').on('hidden.bs.modal', function (e) {
  $('.form__item').find('input, textarea').val('').removeClass('error valid has-value');
  $('form button[type=submit]').removeClass('btn-secondary');
});


