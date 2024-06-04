var Inbox = function () {

    var content = $('.inbox-content');
    var loading = $('.inbox-loading');

    var loadInbox = function (name) {
        var url = 'inbox_inbox.html';
        var title = $('.inbox-nav > li.' + name + ' a').attr('data-title');

        loading.show();
        content.html('');

        $.post(url, {}, function (res) {
            $('.inbox-nav > li.active').removeClass('active');
            $('.inbox-nav > li.' + name).addClass('active');
            $('.inbox-header > h1').text(title);

            loading.hide();
            content.html(res);
            App.fixContentHeight();
            App.initUniform();
        });
    }

    var loadMessage = function (name, resetMenu) {
        var url = 'inbox_view.html';

        loading.show();
        content.html('');

        $.post(url, {}, function (res) {
            if (resetMenu) {
                $('.inbox-nav > li.active').removeClass('active');
            }
            $('.inbox-header > h1').text('View Message');

            loading.hide();
            content.html(res);
            App.fixContentHeight();
            App.initUniform();
        });
    }

    var initTags = function (input) {
        input.tag({
            autosizedInput: true,
            containerClasses: 'span12',
            inputClasses: 'm-wrap',
            source: function (query, process) {
                return [
                    'Bob Nilson <bob.nilson@metronic.com>',
                    'Lisa Miller <lisa.miller@metronic.com>',
                    'Test <test@domain.com>',
                    'Dino <dino@demo.com>',
                    'Support <support@demo.com>']
            }
        });
    }

    var initWysihtml5 = function () {
        $('.inbox-wysihtml5').wysihtml5();
    }

    var initFileupload = function () {

        $('#fileupload').fileupload({


            url: 'resource/metronic/plugins/jquery-file-upload/server/php/',
            autoUpload: true
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
    }

    var loadCompose = function () {
        var url = 'inbox_compose.html';

        loading.show();
        content.html('');


        $.post(url, {}, function (res) {
            $('.inbox-nav > li.active').removeClass('active');
            $('.inbox-header > h1').text('Compose');

            loading.hide();
            content.html(res);

            initTags($('[name="to"]'));
            initFileupload();
            initWysihtml5();

            $('.inbox-wysihtml5').focus();
            App.fixContentHeight();
            App.initUniform();
        });
    }

    var loadReply = function () {
        var url = 'inbox_reply.html';

        loading.show();
        content.html('');


        $.post(url, {}, function (res) {
            $('.inbox-nav > li.active').removeClass('active');
            $('.inbox-header > h1').text('Reply');

            loading.hide();
            content.html(res);
            $('[name="message"]').val($('#reply_email_content_body').html());

            initTags($('[name="to"]'));
            handleCCInput();

            initFileupload();
            initWysihtml5();
            App.fixContentHeight();
            App.initUniform();
        });
    }

    var loadSearchResults = function () {
        var url = 'inbox_search_result.html';

        loading.show();
        content.html('');

        $.post(url, {}, function (res) {
            $('.inbox-nav > li.active').removeClass('active');
            $('.inbox-header > h1').text('Search');

            loading.hide();
            content.html(res);
            App.fixContentHeight();
            App.initUniform();
        });
    }

    var handleCCInput = function () {
        var the = $('.inbox-compose .mail-to .inbox-cc');
        var input = $('.inbox-compose .input-cc');
        the.hide();
        input.show();
        initTags($('[name="cc"]'), -10);
        $('.close', input).click(function () {
            input.hide();
            the.show();
        });
    }

    var handleBCCInput = function () {

        var the = $('.inbox-compose .mail-to .inbox-bcc');
        var input = $('.inbox-compose .input-bcc');
        the.hide();
        input.show();
        initTags($('[name="bcc"]'), -10);
        $('.close', input).click(function () {
            input.hide();
            the.show();
        });
    }

    return {

        init: function () {


            $('.inbox .compose-btn a').live('click', function () {
                loadCompose();
            });


            $('.inbox .reply-btn').live('click', function () {
                loadReply();
            });


            $('.inbox-content .view-message').live('click', function () {
                loadMessage();
            });


            $('.inbox-nav > li.inbox > a').click(function () {
                loadInbox('inbox');
            });


            $('.inbox-nav > li.sent > a').click(function () {
                loadInbox('sent');
            });


            $('.inbox-nav > li.draft > a').click(function () {
                loadInbox('draft');
            });


            $('.inbox-nav > li.trash > a').click(function () {
                loadInbox('trash');
            });


            $('.inbox-compose .mail-to .inbox-cc').live('click', function () {
                handleCCInput();
            });


            $('.inbox-compose .mail-to .inbox-bcc').live('click', function () {
                handleBCCInput();
            });


            if (App.getURLParameter("a") === "view") {
                loadMessage();
            } else if (App.getURLParameter("a") === "compose") {
                loadCompose();
            } else {
                loadInbox('inbox');
            }

        }

    };

}();