/*
 === octapushJS.resourceLoader ===
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
        console.log('octapushJS.resourceLoader has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.22';

        var internal = {
            settings: {
                firebaseConfig: {
                    apiKey: "AIzaSyC2fZ8eIwF8DzFcelp_qh9FLI01Q8o70g0",
                    authDomain: "octapush-plugin-loader.firebaseapp.com",
                    databaseURL: "https://octapush-plugin-loader.firebaseio.com",
                    storageBucket: "octapush-plugin-loader.appspot.com",
                    messagingSenderId: "441046979808"
                }
            },
            errorHandler: function(errText, func) {
                if (_o_.compare.isNullOrEmpty(func) && _o_.compare.isFunction(func))
                    func(errText);
                else
                    console.log(errText);
            },
            resourceLoader: function (options) {
                options = {
                    url: options.url || null,
                    parameters: options.parameters || null,
                    attributes: options.attributes || null,
                    onSuccess: options.onSuccess || null,
                    onError: options.onError || null,
                    type: _o_.utility.ifNull(options.type, 'script') /* [ 'script', 'style' ] */
                };

                if (_o_.compare.isNullOrEmpty(options.url)) {
                    internal.errorHandler('Error calling resourceLoader():\nInvalid supplied URL.', options.onError);
                    return;
                }

                options.type = options.type.toLowerCase();
                var res = null;
                if (options.type === 'script') {
                    res = document.createElement('sccript');
                    res.type = 'text/javascript',
                    res.src = options.url + (_o_.compare.isNullOrEmpty(options.parameters) ? '' : ('?'))
                }
            }
        };

        internal.init.apply();

        // _o_.resourceLoader = Object.assign(_o_.utility.ifNull(_o_.resourceLoader, {}), {
        //     settings: {
        //         initialized: false,
        //         loadedPlugin: []
        //     },
        //     version: version
        // });
    }
})(window);