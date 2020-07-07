require('jquery-validation/dist/jquery.validate');
export default function form() {

  return {
    init: () => {
      if ($('form[validation]').length > 0) {

        // $('.custom-form').attr({'novalidate':'novalidate', 'validation':''})


        jQuery.validator.addMethod("phone", function (value, element) {
          return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(value);
        }, "Please enter correct phone number");

        jQuery.validator.addMethod("email", function (value, element) {
          return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }, "Please enter correct phone number");
        jQuery.validator.addMethod('hiddenRecaptcha', function (value, element, param) {
          if (grecaptcha.getResponse() == '') {
            console.log('return false')
            return false;
          } else {
            console.log('return true')
            return true
          }
        }, 'You must complete the antispam verification');


        $('.custom-form').each(function (index, ele) {
          $(ele).validate({ // initialize the plugin
            ignore: ".ignore",
          });
        })
      }

    }

  }
}
