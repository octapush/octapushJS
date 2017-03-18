$(function() {
    'use strict';

    var main = {
        settings: {
            plugins: ['array', 'datetime', 'number', 'string']
        },
        register: function() {
            main.helper.loadPlugins(function() {
                alert('done');
            })
        },
        ui: {
            register: function() {}
        },
        events: {
            register: function() {}
        },
        helper: {
            loadPlugins: function(cb) {
                _o_.settings.pluginsPath = '../plugins/';
                _o_.utility.importPlugin(main.settings.plugins, cb);
            }
        }
    };

    main.register.apply();
});