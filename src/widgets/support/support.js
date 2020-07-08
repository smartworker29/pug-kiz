let hasVal = document.querySelectorAll('form .form__item input:not([type="hidden"]), form .form__item textarea');

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
});

$('.custom-form .submit-button').on('click', function (e) {
    e.preventDefault();
    var inputele = $(this).parents('.custom-form').find('.form__item input:not([type="hidden"])');
    var textareaele = $(this).parents('.custom-form').find('.form__item textarea');
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

    $(this).parents('.custom-form').find('.error').first().focus();


    if ($(this).parents('.custom-form').find('.error').length == 0) {
        $(this).parents('.custom-form').submit();
    }
})

// $('.modal').on('hidden.bs.modal', function (e) {
//   $('.support-input').val('').removeClass('error valid has-value');
//   $('form button[type=submit]').removeClass('btn-secondary');
// });


