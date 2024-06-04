var FormValidation = function () {


    return {

        init: function () {




            var form1 = $('#form_sample_1');
            var error1 = $('.alert-error', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span',
                errorClass: 'help-inline',
                focusInvalid: false,
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    url: {
                        required: true,
                        url: true
                    },
                    number: {
                        required: true,
                        number: true
                    },
                    digits: {
                        required: true,
                        digits: true
                    },
                    creditcard: {
                        required: true,
                        creditcard: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    category: {
                        required: true
                    }
                },

                invalidHandler: function (event, validator) {
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) {
                    $(element)
                        .closest('.help-inline').removeClass('ok');
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error');
                },

                unhighlight: function (element) {
                    $(element)
                        .closest('.control-group').removeClass('error');
                },

                success: function (label) {
                    label
                        .addClass('valid').addClass('help-inline ok')
                    .closest('.control-group').removeClass('error').addClass('success');
                },

                submitHandler: function (form) {
                    success1.show();
                    error1.hide();
                }
            });


            var form2 = $('#form_sample_2');
            var error2 = $('.alert-error', form2);
            var success2 = $('.alert-success', form2);

            form2.validate({
                errorElement: 'span',
                errorClass: 'help-inline',
                focusInvalid: false,
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    category: {
                        required: true
                    },
                    education: {
                        required: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    membership: {
                        required: true
                    },
                    service: {
                        required: true,
                        minlength: 2
                    }
                },

                messages: {
                    membership: {
                        required: "Please select a Membership type"
                    },
                    service: {
                        required: "Please select  at least 2 types of Service",
                        minlength: jQuery.format("Please select  at least {0} types of Service")
                    }
                },

                errorPlacement: function (error, element) {
                    if (element.attr("name") == "education") {
                        error.insertAfter("#form_2_education_chzn");
                    } else if (element.attr("name") == "membership") {
                        error.addClass("no-left-padding").insertAfter("#form_2_membership_error");
                    } else if (element.attr("name") == "service") {
                        error.addClass("no-left-padding").insertAfter("#form_2_service_error");
                    } else {
                        error.insertAfter(element);
                    }
                },

                invalidHandler: function (event, validator) {
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                highlight: function (element) {
                    $(element)
                        .closest('.help-inline').removeClass('ok');
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error');
                },

                unhighlight: function (element) {
                    $(element)
                        .closest('.control-group').removeClass('error');
                },

                success: function (label) {
                    if (label.attr("for") == "service" || label.attr("for") == "membership") {
                        label
                            .closest('.control-group').removeClass('error').addClass('success');
                        label.remove();
                    } else {
                        label
                            .addClass('valid').addClass('help-inline ok')
                        .closest('.control-group').removeClass('error').addClass('success');
                    }
                },

                submitHandler: function (form) {
                    success2.show();
                    error2.hide();
                }

            });


            $('.chosen, .chosen-with-diselect', form2).change(function () {
                form2.validate().element($(this));
            });

        }

    };

}();