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
    if (!w.octapushJS || !w._o_) {
        console.log('octapushJS.webResource has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.23';

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
            model: {
                pluginItem: function (data) {
                    return {
                        name: data.name || null,
                        description: data.description || null,
                        version: data.version || null,
                        keywords: data.keywords || [],
                        dependencies: data.dependencies || [],
                        files: {
                            script: [],
                            styles: []
                        }
                    };
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
            getResource: function (resName, resVersion) {
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
                            .equalTo(resName)
                            //.on('child_added', function (data) {
                            .on('value', function (data) {
                                //var plugin = _o_.webResource.model.pluginItem(data.val());
                                //console.log(plugin);

                                var plugin = null;

                                // take the data which equal with resVersion
                                if (!_o_.compare.isNullOrEmpty(resVersion)) {
                                    data.forEach(function (item) {
                                        plugin = _o_.webResource.model.pluginItem(item.val());
                                        if (plugin.version.toLowerCase() == resVersion.toLowerCase()) {
                                            return;
                                        }
                                    });

                                // take the latest version.
                                } else {

                                }

                                console.log(plugin);
                                console.log(parseFloat(plugin.version, 4));
                            });
                    }
                });
            }
        });

        _o_.webResource.getResource('jQuery', '1.12.4');
    }
})(window);