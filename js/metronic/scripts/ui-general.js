var UIGeneral = function () {

    var handlePulsate = function () {
        if (!jQuery().pulsate) {
            return;
        }

        if (App.isIE8() == true) {
            return;
        }

        if (jQuery().pulsate) {
            jQuery('#pulsate-regular').pulsate({
                color: "#bf1c56"
            });

            jQuery('#pulsate-once').click(function () {
                $(this).pulsate({
                    color: "#399bc3",
                    repeat: false
                });
            });

            jQuery('#pulsate-hover').pulsate({
                color: "#5ebf5e",
                repeat: false,
                onHover: true
            });

            jQuery('#pulsate-crazy').click(function () {
                $(this).pulsate({
                    color: "#fdbe41",
                    reach: 50,
                    repeat: 10,
                    speed: 100,
                    glow: true
                });
            });
        }
    }

    var handleGritterNotifications = function () {
        if (!jQuery.gritter) {
            return;
        }

        $('#gritter-sticky').click(function () {
            var unique_id = $.gritter.add({

                title: 'This is a sticky notice!',

                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',

                image: 'resource/metronic/img/avatar1.jpg',

                sticky: true,

                time: '',

                class_name: 'my-sticky-class'
            });
            return false;
        });

        $('#gritter-regular').click(function () {

            $.gritter.add({

                title: 'This is a regular notice!',

                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',

                image: 'resource/metronic/img/avatar1.jpg',

                sticky: false,

                time: ''
            });

            return false;

        });

        $('#gritter-max').click(function () {

            $.gritter.add({

                title: 'This is a notice with a max of 3 on screen at one time!',

                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',

                image: 'resource/metronic/img/avatar1.jpg',

                sticky: false,

                before_open: function () {
                    if ($('.gritter-item-wrapper').length == 3) {

                        return false;
                    }
                }
            });
            return false;
        });

        $('#gritter-without-image').click(function () {
            $.gritter.add({

                title: 'This is a notice without an image!',

                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
            });

            return false;
        });

        $('#gritter-light').click(function () {

            $.gritter.add({

                title: 'This is a light notification',

                text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
                class_name: 'gritter-light'
            });

            return false;
        });

        $("#gritter-remove-all").click(function () {

            $.gritter.removeAll();
            return false;

        });
    }

    var handleDynamicPagination = function() {
        $('#dynamic_pager_demo1').bootpag({
            total: 6,
            page: 1,
        }).on("page", function(event, num){
            $("#dynamic_pager_content1").html("Page " + num + " content here");
        });

        $('#dynamic_pager_demo2').bootpag({
            total: 24,
            page: 1,
            maxVisible: 6 
        }).on('page', function(event, num){
            $("#dynamic_pager_content2").html("Page " + num + " content here");
        });
    }

    return {

        init: function () {
            handlePulsate();
            handleGritterNotifications();
            handleDynamicPagination();
        }

    };

}();