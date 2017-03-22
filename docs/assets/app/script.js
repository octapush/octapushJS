(function (w, d) {
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
        register: function () {
            octapushDoc.helper.loadPlugins(function () {
                octapushDoc.ui.register.apply();
                octapushDoc.events.register.apply();
            })
        },
        ui: {
            register: function () {
                octapushDoc.ui.builder.register.apply();
            },
            builder: {
                register: function () {
                    octapushDoc.ui.builder.sideMenus();
                },
                sideMenus: function () {
                    octapushDoc.helper.sortMenuList();

                    var newO = Object.assign({
                        'First Learn': {
                            'Introduction': 'introduction',
                            'Download': 'Download',
                            'Installation': 'Installation'
                        }
                    }, _o_);

                    $('ul#sideMenu').html(octapushDoc.helper.sideMenusGenerator(newO, '_o_'));
                },
                page: {
                    render: function (data) {
                        if (_o_.compare.isNullOrEmpty(data))
                            return;

                        data = octapushDoc.helper.parseMyBadObject(data.octapushJSDocumentation);

                        octapushDoc.ui.builder.page.author.prime(data.authors.prime);
                        octapushDoc.ui.builder.page.author.editors(data.authors.editors);
                    },
                    author: {
                        prime: function (data) {
                            if (_o_.compare.isNullOrEmpty(data))
                                return;

                            $('div#author-wrapper table > tbody > tr').html(
                                _o_.string.template('<td>{{name}}</td><td><a href="mailto:{{email}}">{{email}}</a></td><td><a href="{{url}}">{{url}}</a></td>', data)
                            );
                        },
                        editors: function (data) {
                            if (_o_.compare.isNullOrEmpty(data))
                                return;

                            if (_o_.compare.isString(data.item[0]))
                                $('div#editor-wrapper').hide(0);
                            else
                                $('div#editor-wrapper').show(0);
                        }
                    }
                }
            }
        },
        events: {
            register: function () {
                octapushDoc.events.sideMenus.parent.apply();
                octapushDoc.events.sideMenus.child.apply();
            },
            window: {
                onReady: function () {
                    $(d).ready(function () {
                        octapushDoc.register.apply();
                    });
                }
            },
            sideMenus: {
                parent: function () {
                    $('a.treeview')
                        .unbind()
                        .on('click', function (e) {
                            e.preventDefault();
                            var that = $(this);

                            (function () {
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
                child: function () {
                    $('a[data-link]')
                        .unbind()
                        .on('click', function (e) {
                            e.preventDefault();
                            var that = $(this);

                            (function () {
                                var dataPath = that.data('link');

                                _o_.ajax.request({
                                    url: _o_.string.format('data/{1}', dataPath),
                                    success: function (xhr) {
                                        var r = $.parseXML(xhr.responseText);
                                        w.myXml = r;

                                        var xtj = octapushDoc.helper.xmlToJson(r);
                                        octapushDoc.ui.builder.page.render(xtj);
                                    }
                                });
                            })();
                        });
                }
            }
        },
        helper: {
            sortObject: function (obj, recursive) {
                recursive = recursive ? recursive : false;

                var sorted = {};

                Object.keys(obj).sort().forEach(function (key) {
                    sorted[key] = obj[key];

                    if (recursive && _o_.compare.isObject(obj[key]))
                        sorted[key] = octapushDoc.helper.sortObject(obj[key], recursive);
                });

                return sorted;
            },
            sortMenuList: function () {
                _o_ = octapushDoc.helper.sortObject(_o_, true);

                var unsorted = {};
                _o_.utility.forEach(settings.resortedItems, function (key, val) {
                    unsorted[val] = _o_[val];
                    delete _o_[val];
                });

                _o_ = Object.assign(unsorted, _o_);
            },
            loadPlugins: function (cb) {
                // change octapush plugin url;
                _o_.settings.pluginsPath = '../plugins/';
                _o_.utility.importPlugin(settings.plugins, cb);
            },
            sideMenusGenerator: function (obj, parent) {
                var str = '';
                var i = 0;

                _o_.utility.each(obj, function (key, val) {
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
            },
            xmlToJson: function (xml) {
                // Create the return object
                var obj = {};

                if (xml.nodeType == 1) { // element
                    // do attributes
                    if (xml.attributes.length > 0) {
                        obj["@attributes"] = {};
                        for (var j = 0; j < xml.attributes.length; j++) {
                            var attribute = xml.attributes.item(j);
                            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                        }
                    }

                } else if (xml.nodeType == 3) { // text
                    obj = xml.nodeValue;
                }

                // do children
                if (xml.hasChildNodes()) {
                    for (var i = 0; i < xml.childNodes.length; i++) {
                        var item = xml.childNodes.item(i);
                        var nodeName = item.nodeName;
                        if (typeof (obj[nodeName]) == "undefined") {
                            obj[nodeName] = octapushDoc.helper.xmlToJson(item);

                        } else {
                            if (typeof (obj[nodeName].push) == "undefined") {
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }

                            obj[nodeName].push(octapushDoc.helper.xmlToJson(item));
                        }
                    }
                }
                return obj;
            },
            parseMyBadObject: function (obj) {
                var result = {};

                _o_.utility.each(obj, function (key, val) {
                    if (!_o_.string.isEqual(key, '#text')) {
                        if (_o_.compare.isObject(val) && Object.keys(val).length === 1)
                            result[key] = _o_.string.trim(_o_.string.collapseWhitespace(val['#text']));

                        else if ((_o_.compare.isObject(val) || _o_.compare.isArray(val)) && Object.keys(val).length > 1)
                            result[key] = octapushDoc.helper.parseMyBadObject(val);

                        else
                            result[key] = val;
                    }
                });

                return result;
            }
        }
    };

    octapushDoc.events.window.onReady.apply();
})(window, document);