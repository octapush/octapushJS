(function(w, d) {
    'use strict';

    var settings = {
        documentType: 'xml',
        menuTooglingSpeed: 500,
        plugins: [
            'array',
            'datetime',
            'number',
            'string'
        ],
        directItems: [
            'copyleft',
            'version',
            'showCopyleft'
        ],
        hiddenItems: [
            'localization'
        ],
        resortedItems: [
            'settings',
            'copyleft',
            'showCopyleft',
            'version'
        ]
    };

    w.octapushDoc = {
        register: function() {
            octapushDoc.helper.loadPlugins(function() {
                octapushDoc.ui.register.apply();
                octapushDoc.events.register.apply();
            })
        },
        ui: {
            register: function() {
                octapushDoc.ui.builder.register.apply();
            },
            builder: {
                register: function() {
                    octapushDoc.ui.builder.sideMenus();
                },
                sideMenus: function() {
                    octapushDoc.helper.sortMenuList();

                    var newO = Object.assign({
                        'First Learn': {
                            'Introduction': 'introduction',
                            'Download': 'Download',
                            'Installation': 'Installation'
                        }
                    }, _o_);

                    $('ul#sideMenu').html(octapushDoc.helper.sideMenusGenerator(newO, '_o_'));
                }
            }
        },
        events: {
            register: function() {
                octapushDoc.events.sideMenus.parent.apply();
                octapushDoc.events.sideMenus.child.apply();
            },
            window: {
                onReady: function() {
                    $(d).ready(function() {
                        octapushDoc.register.apply();
                    });
                }
            },
            sideMenus: {
                parent: function() {
                    $('a.treeview')
                        .unbind()
                        .on('click', function(e) {
                            e.preventDefault();
                            var that = $(this);

                            (function() {
                                // collapse other menus
                                $(_o_.string.format('ul#sideMenu > li:not(:contains({1})) > ul', that.text()))
                                    .css('display', 'none');

                                // expand clicked menu
                                that
                                    .parents('li')
                                    .find('ul')
                                    .toggle(settings.menuTooglingSpeed);
                            })();
                        });
                },
                child: function() {
                    $('a[data-link]')
                        .unbind()
                        .on('click', function(e) {
                            e.preventDefault();
                            var that = $(this);

                            (function() {
                                var dataPath = that.data('link');

                                _o_.ajax.request({
                                    url: _o_.string.format('data/{1}', dataPath),
                                    success: function(xhr) {
                                        console.log(xhr.responseText);
                                    }
                                });
                            })();
                        });
                }
            }
        },
        helper: {
            sortObject: function(obj, recursive) {
                recursive = recursive ? recursive : false;

                var sorted = {};

                Object.keys(obj).sort().forEach(function(key) {
                    sorted[key] = obj[key];

                    if (recursive && _o_.compare.isObject(obj[key]))
                        sorted[key] = octapushDoc.helper.sortObject(obj[key], recursive);
                });

                return sorted;
            },
            sortMenuList: function() {
                _o_ = octapushDoc.helper.sortObject(_o_, true);

                var unsorted = {};
                _o_.utility.forEach(settings.resortedItems, function(key, val) {
                    unsorted[val] = _o_[val];
                    delete _o_[val];
                });

                _o_ = Object.assign(unsorted, _o_);
            },
            loadPlugins: function(cb) {
                // change octapush plugin url;
                _o_.settings.pluginsPath = '../plugins/';
                _o_.utility.importPlugin(settings.plugins, cb);
            },
            sideMenusGenerator: function(obj, parent) {
                var str = '';
                var i = 0;

                _o_.utility.each(obj, function(key, val) {
                    var css = 'list-group-item';

                    if (settings.directItems.indexOf(key) != -1)
                        css = 'list-group-item';

                    if (settings.hiddenItems.indexOf(key) != -1)
                        return;

                    if (!_o_.compare.isObject(val))
                        str += _o_.string.template(
                            '<li class="{{css}} child" data-menu="menu-child">{{anchors}}</li>', {
                                css: css,
                                key: key,
                                anchors: _o_.string.template(
                                    '<a href="#" data-link="{{parent}}.{{key0}}.{{docType}}">{{key1}}</a>', {
                                        parent: parent,
                                        key0: key,
                                        key1: _o_.string.concat(key, _o_.compare.isFunction(val) ? '()' : ''),
                                        docType: settings.documentType
                                    })
                            }
                        );

                    else {
                        str += _o_.string.template(
                            '<li class="list-group-item parent">{{anchors}}{{openUl}}{{submenus}}</ul></li>', {
                                anchors: _o_.string.format('<a href="#" class="treeview">{1}</a>', key),
                                openUl: _o_.string.format('<ul style="display:none" class="menu-treeview" data-bind="collapse_{1}">', key),
                                submenus: octapushDoc.helper.sideMenusGenerator(
                                    val,
                                    _o_.string.format(
                                        '{1}.{2}',
                                        parent,
                                        key
                                    )
                                ),
                            }
                        );
                    }

                    i++;
                });

                return str;
            }
        }
    };

    octapushDoc.events.window.onReady.apply();
})(window, document);