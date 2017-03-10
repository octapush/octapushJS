/*
 === octapushJS.webResource ===
 Author  : Fadhly Permata
 eMail   : fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer : Fadhly Permata

 === Contributors ===
 ... just type your name here after editing the script ...
 */
(function (w) {
    'use strict';
    if (!w._o_) {
        console.log('octapushJS.webResource has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.24';

        var internal = {
            versionCompare: function (a, b) {
                var i, cmp, len, re = /(\.0)+[^\.]*$/;
                a = (a + '').replace(re, '').split('.');
                b = (b + '').replace(re, '').split('.');
                len = Math.min(a.length, b.length);
                for (i = 0; i < len; i++) {
                    cmp = parseInt(a[i], 10) - parseInt(b[i], 10);
                    if (cmp !== 0) return cmp;
                }
                return a.length - b.length;
            },
            gteVersion: function (a, b) {
                return internal.versionCompare(a, b) >= 0;
            },
            lteVersion: function (a, b) {
                return internal.versionCompare(a, b) < 0;
            }
        };

        _o_.utility = Object.assign(_o_.utility, {
            errorHandler: function (errText, func) {
                if (!_o_.compare.isNullOrEmpty(func) && _o_.compare.isFunction(func))
                    func(errText);

                else
                    console.log(errText);
            }
        });

        _o_.webResource = Object.assign(_o_.utility.ifNull(_o_.webResource, {}), {
            settings: {
                fbConfig: {
                    apiKey: "AIzaSyC2fZ8eIwF8DzFcelp_qh9FLI01Q8o70g0",
                    authDomain: "octapush-plugin-loader.firebaseapp.com",
                    databaseURL: "https://octapush-plugin-loader.firebaseio.com",
                    storageBucket: "octapush-plugin-loader.appspot.com",
                    messagingSenderId: "441046979808"
                }
            },
            models: {
                pluginItem: function (data) {
                    return _o_.utility.extend({
                        name: null,
                        description: null,
                        version: '0',
                        keywords: [],
                        dependencies: [],
                        files: {
                            scripts: [],
                            styles: []
                        }
                    }, data);
                }
            },
            load: function (options) {
                options = {
                    url: options.url || null,
                    parameters: options.parameters || null,
                    attributes: options.attributes || null,
                    onSuccess: options.onSuccess || null,
                    onError: options.onError || null,
                    type: _o_.utility.ifNull(options.type, 'script') /* [ 'script', 'style' ] */
                };

                try {
                    if (_o_.compare.isNullOrEmpty(options.url))
                        throw 'Error calling resourceLoader():\nInvalid supplied URL.';

                    options.type = options.type.toLowerCase();
                    var res = null;
                    if (options.type === 'script') {
                        res = document.createElement('script');
                        res.type = 'text/javascript';
                        res.src = options.url + (_o_.compare.isNullOrEmpty(options.parameters) ? '' : ('?'.concat(options.parameters)));

                    } else if (options.type === 'style') {
                        res = document.createElement('link');
                        res.rel = 'stylesheet';
                        res.href = options.url + (_o_.compare.isNullOrEmpty(options.parameters) ? '' : '?'.concat(options.parameters));
                    }

                    // create additional informations
                    if (!_o_.compare.isNullOrEmpty(options.attributes))
                        for (var prop in options.attributes)
                            res.setAttribute(prop, options.attributes[prop]);

                    // bind ready events
                    if (res.readyState) { // IE
                        res.onreadystatechange = function () {
                            if (res.readyState.toLowerCase() === 'loaded' || res.readyState.toLowerCase() === 'complete')
                                if (options.type.toLowerCase() === 'script')
                                    res.parentNode.removeChild(res);

                            res.onreadystatechange = null;

                            if (!_o_.compare.isNullOrEmpty(options.onSuccess) && _o_.compare.isFunction(options.onSuccess))
                                options.onSuccess(res);
                        };

                        res.onerror = function () {
                            if (options.type.toLowerCase() === 'script')
                                res.parentNode.removeChild(res);

                            throw 'Can not load the script from '.concat(options.url);
                        }
                    } else {
                        res.onload = function () {
                            if (options.type.toLowerCase() === 'script')
                                res.parentNode.removeChild(res);

                            if (!_o_.compare.isNullOrEmpty(options.onSuccess) && _o_.compare.isFunction(options.onSuccess))
                                options.onSuccess(res);
                        }

                        res.onerror = function () {
                            if (options.type.toLowerCase() === 'script')
                                res.parentNode.removeChild(res);

                            throw 'Can not load the script from '.concat(options.url);
                        }
                    }

                    // bind to the DOM
                    var parent = options.type.toLowerCase() === 'style' ? 'head' : (document.getElementsByTagName('body')[0] === undefined ? 'head' : 'body');
                    (document.getElementsByTagName(parent)[0]).appendChild(res);

                } catch (e) {
                    _o_.utility.errorHandler(e, options.onError);
                }
            },
            getResource: function (param) {
                param = {
                    name: param.name || null,
                    version: param.version || null,
                    onSuccess: param.onSuccess || null
                };

                // prepare for fb resource: database
                _o_.webResource.load({
                    url: 'https://www.gstatic.com/firebasejs/3.6.2/firebase.js',
                    type: 'script',
                    onSuccess: function (res) {
                        firebase.initializeApp(_o_.webResource.settings.fbConfig);

                        firebase
                            .database()
                            .ref('plugin-list')
                            .orderByChild('name')
                            .equalTo(param.name)
                            .on('value', function (data) {
                                var plugin = _o_.webResource.models.pluginItem({});;

                                data.forEach(function (item) {
                                    if (!_o_.compare.isNullOrEmpty(param.version))
                                        if (item.val().version.toLowerCase() === param.version.toLowerCase())
                                            plugin = _o_.webResource.models.pluginItem(item.val());

                                    else
                                        if (internal.lteVersion(plugin.version, item.val().version))
                                            plugin = _o_.webResource.models.pluginItem(item.val());
                                });

                                // TODO:
                                // + ADD DEPENDENCY LOAD
                                if (plugin.hasOwnProperty('dependencies') && plugin.dependencies.length > 0) {
                                    // _o_.utility.each(plugin.dependencies, function(key, val) {
                                    //     _o_.webResource.getResource(val.name, val.version || null);
                                    // });
                                }

                                // GET THE FILES: SCRIPTS
                                _o_.utility.each(plugin.files.scripts, function (key, val) {
                                    if (_o_.compare.isJsonObject(val)) {
                                        var attrs = {};
                                        _o_.utility.each(val, function (k, v) {
                                            if (k.toLowerCase() !== 'url')
                                                attrs[k] = v;
                                        });

                                        _o_.webResource.load({
                                            url: val.url,
                                            attributes: attrs
                                        });

                                    } else {
                                        _o_.webResource.load({
                                            url: val
                                        });
                                    }
                                });

                                // GET THE FILES: STYLES
                                _o_.utility.each(plugin.files.styles, function (key, val) {
                                    if (_o_.compare.isJsonObject(val)) {
                                        var attrs = {};
                                        _o_.utility.each(val, function (k, v) {
                                            if (k.toLowerCase() !== 'url')
                                                attrs[k] = v;
                                        });

                                        _o_.webResource.load({
                                            url: val.url,
                                            attributes: attrs,
                                            type: 'style'
                                        });

                                    } else {
                                        _o_.webResource.load({
                                            url: val
                                        });
                                    }
                                });
                            });
                    }
                });
            }
        });
    }
})(window);