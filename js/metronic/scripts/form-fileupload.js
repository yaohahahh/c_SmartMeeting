var FormFileUpload = function () {


    return {

        init: function () {


            $('#fileupload').fileupload({


                url: 'resource/metronic/plugins/jquery-file-upload/server/php/'
            });



            $.ajax({


                url: $('#fileupload').fileupload('option', 'url'),
                dataType: 'json',
                context: $('#fileupload')[0],
                maxFileSize: 5000000,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                process: [{
                        action: 'load',
                        fileTypes: /^image\/(gif|jpeg|png)$/,
                        maxFileSize: 20000000
                    }, {
                        action: 'resize',
                        maxWidth: 1440,
                        maxHeight: 900
                    }, {
                        action: 'save'
                    }
                ]
            }).done(function (result) {
                $(this).fileupload('option', 'done')
                    .call(this, null, {
                    result: result
                });
            });


            if ($.support.cors) {
                $.ajax({
                    url: 'resource/metronic/plugins/jquery-file-upload/server/php/',
                    type: 'HEAD'
                }).fail(function () {
                    $('<span class="alert alert-error"/>')
                        .text('Upload server currently unavailable - ' +
                        new Date())
                        .appendTo('#fileupload');
                });
            }


            App.initUniform('.fileupload-toggle-checkbox');
        }

    };

}();