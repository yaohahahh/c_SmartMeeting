require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {
        'facebook': {
            'label': 'Facebook',
            'icon': 'fa fa-facebook',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http:
            }
        },
        'twitter': {
            'label': 'Twitter',
            'icon': 'fa fa-twitter',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http:
            }
        },
        'google': {
            'label': 'Google+',
            'icon': 'fa fa-google-plus',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https:
            }
        },
        'weibo': {
            'label': 'Weibo',
            'icon': 'fa fa-weibo',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http:
            }
        },
        'instapaper': {
            'label': 'Instapaper',
            'icon': 'fa fa-instapaper',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http:
            }
        },
        'vk': {
            'label': 'VK',
            'icon': 'fa fa-vk',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http:
            }
        }
    };



    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;


        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });


        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }


        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
