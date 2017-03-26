(function(w, d) {
    'use strict';

    var settings = {
        useLocalRepo: false,
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

    var octapushDoc = {
        register: function() {
            octapushDoc.helper.loadPlugins(function() {
                octapushDoc.ui.register.apply();
                octapushDoc.events.register.apply();
            });
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
                            'Download': 'download',
                            'Installation': 'installation'
                        }
                    }, _o_);

                    $('ul#sideMenu').html(octapushDoc.helper.sideMenusGenerator(newO, '_o_'));
                },
                highlightJs: function() {
                    hljs.initHighlighting();
                },
                page: {
                    render: function(data) {
                        if (_o_.compare.isNullOrEmpty(data))
                            return;

                        data = octapushDoc.helper.parseMyBadObject(data.octapushJSDocumentation);

                        octapushDoc.ui.builder.page.author.prime(data.authors.prime);
                        octapushDoc.ui.builder.page.author.editors(data.authors.editors);
                        octapushDoc.ui.builder.page.main(data);
                    },
                    author: {
                        prime: function(data) {
                            if (_o_.compare.isNullOrEmpty(data))
                                return;

                            $('div#author-wrapper table > tbody > tr').html(
                                _o_.string.template('<td>{{name}}</td><td><a href="mailto:{{email}}">{{email}}</a></td><td><a href="{{url}}">{{url}}</a></td>', data)
                            );
                        },
                        editors: function(data) {
                            if (_o_.compare.isNullOrEmpty(data))
                                return;

                            if (_o_.compare.isString(data.item[0]))
                                $('div#editor-wrapper').hide(0);

                            else
                                $('div#editor-wrapper').show(0);
                        }
                    },
                    main: function(data) {
                        delete data.authors;

                        var contentBuilder = {
                            globalBuilder: function(d) {
                                var sDom = '';
                                _o_.utility.each(d, function(key, val) {
                                    if (_o_.compare.isObject(val)) {
                                        if (contentBuilder.customDOM.hasOwnProperty(key))
                                            val = contentBuilder.customDOM[key](val);
                                        else
                                            val = 'INI OBJECT';
                                    }

                                    sDom += _o_.compare.isNullOrEmpty(sDom) ? '' : '<div class="h-space"></div>';
                                    sDom += _o_.string.format(_o_.string.concat(
                                        '<div>',
                                        '  <div class="title">',
                                        '    <h4>{1}</h4>',
                                        '  </div>',
                                        '  <div class="content">',
                                        '    {2}',
                                        '  </div>',
                                        '</div>'
                                    ), _o_.string.toUpper(_o_.string.humanize(key)), val);
                                });

                                $('div#tab-document').html(sDom);

                                octapushDoc.ui.builder.highlightJs.apply();
                            },
                            customDOM: {
                                table: {
                                    build: function(d) {
                                        var tHead = contentBuilder.customDOM.table.head(d);
                                        var tBody = contentBuilder.customDOM.table.rows(d);

                                        return _o_.string.format(
                                            '<table class="table table-bordered table-striped table-hover">{1}{2}</table>',
                                            tHead,
                                            tBody
                                        );
                                    },
                                    head: function(d) {
                                        var tHead = '';

                                        if (d[0])
                                            d = d[0];

                                        _o_.utility.each(d, function(key) {
                                            tHead += _o_.string.format(
                                                '<th>{1}</th>',
                                                _o_.string.toUpper(_o_.string.humanize(key))
                                            );
                                        });

                                        return _o_.string.format('<thead><tr>{1}</tr></thead>', tHead);
                                    },
                                    rows: function(d) {
                                        var tRows = '';

                                        if (d[0]) {
                                            _o_.utility.each(d, function(key, val) {
                                                var tds = '';

                                                _o_.utility.each(val, function(k, v) {
                                                    tds += _o_.string.format('<td>{1}</td>', v);
                                                });

                                                tRows += _o_.string.format('<tr>{1}</tr>', tds);
                                            });
                                        } else {
                                            var tds = '';

                                            _o_.utility.each(d, function(k, v) {
                                                tds += _o_.string.format('<td>{1}</td>', v);
                                            });

                                            tRows += _o_.string.format('<tr>{1}</tr>', tds);
                                        }

                                        return _o_.string.format('<tbody>{1}</tbody>', tRows);
                                    }
                                },
                                parameters: function(d) {
                                    return contentBuilder.customDOM.table.build(d.item);
                                },
                                return: function(d) {
                                    return contentBuilder.customDOM.table.build(d);
                                },
                                samples: function(d) {
                                    var samples = '';
                                    d = d.item;

                                    _o_.utility.each(d, function(key, val) {
                                        samples += _o_.string.template(
                                            '<div>{{description}}<pre><code>{{code}}</code></pre></div>',
                                            val
                                        );
                                    });

                                    return samples;
                                }
                            }
                        };
                        contentBuilder.globalBuilder(data);
                    }
                }
            }
        },
        events: {
            register: function() {
                octapushDoc.events.window.onReady.apply();
            },
            window: {
                onReady: function() {
                    $(d).ready(function() {
                        octapushDoc.register.apply();

                        octapushDoc.events.sideMenus.parent.apply();
                        octapushDoc.events.sideMenus.child.apply();
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
                                        var r = $.parseXML(xhr.responseText);

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
                // change octapush plugin url to the local
                if (!settings.useLocalRepo)
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
            },
            xmlToJson: function(xml) {
                // Create the return object
                var obj = {};

                if (xml.nodeType == 1) { // element
                    // do attributes
                    if (xml.attributes.length > 0) {
                        obj["@attributes"] = {};
                        _o_.utility.loop(xml.attributes.length, function(j) {
                            var attribute = xml.attributes.item(j);
                            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                        });
                    }

                } else if (xml.nodeType == 3) { // text
                    obj = xml.nodeValue;
                }

                // do children
                if (xml.hasChildNodes())
                    _o_.utility.loop(xml.childNodes.length, function(i) {
                        var item = xml.childNodes.item(i);
                        var nodeName = item.nodeName;

                        if (typeof(obj[nodeName]) == "undefined") {
                            obj[nodeName] = octapushDoc.helper.xmlToJson(item);

                        } else {
                            if (typeof(obj[nodeName].push) == "undefined") {
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }

                            obj[nodeName].push(octapushDoc.helper.xmlToJson(item));
                        }
                    });

                return obj;
            },
            parseMyBadObject: function(obj) {
                var result = {};

                _o_.utility.each(obj, function(key, val) {
                    if (!_o_.string.isEqual(key, '#text')) {
                        if (_o_.compare.isObject(val) && Object.keys(val).length === 1)
                            result[key] = _o_.string.trim(
                                _o_.string.collapseWhitespace(val['#text'])
                            );

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

    octapushDoc.events.register.apply();
})(window, document);