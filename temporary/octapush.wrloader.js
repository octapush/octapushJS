/*
 === octapush-wrloader ===
 Author  : Fadhly Permata
 eMail   : - fadhly.permata@gmail.com
 - fadhly.permata@octapush.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer            : Fadhly Permata (Octapush Team)
 Developer Team Support     : Adam Sumarna   (Octapush Team)
 
 === Contributors ===
 ... just type your name here after editing the script ...
 */

(function () {
    'use strict';

    var currentVersion = '2017.02.03';

    // firebase connector

    var _o_ = {
        WebResourcesLoader: {
            version: currentVersion
        },
        fn: {
            ajax: function (options) {
                // TODO:
                // + ADD CORS HANDLER

                var options = {
                    url: options.url || null,
                    data: options.data || null,
                    contentType: _o_.utility.ifNull(options.contentType, 'application/x-www-form-urlencoded; charset=UTF-8'),
                    method: _o_.utility.ifNull(options.method, 'GET'),
                    async: _o_.utility.ifNull(options.async, false),
                    success: options.success || null,
                    error: options.error || null
                };

                var core = {
                    createXhr: function () {
                        if ((typeof (XMLHttpRequest)).toLowerCase() !== 'undefined')
                            return new XMLHttpRequest;

                        var version = [
                            "MSXML2.XmlHttp.6.0",
                            "MSXML2.XmlHttp.5.0",
                            "MSXML2.XmlHttp.4.0",
                            "MSXML2.XmlHttp.3.0",
                            "MSXML2.XmlHttp.2.0",
                            "Microsoft.XmlHttp"
                        ];

                        var xhr;
                        for (var i = 0; i < versions.length; i++) {
                            try {
                                xhr = new ActiveXObject(versions[i]);
                                break;

                            } catch (e) {
                                _o_.fn.errorHandler(e, options.error);
                            }
                        }

                        return xhr;
                    },
                    get: function () {
                        var xhr = core.createXhr();
                        xhr.open(options.method, options.url + (options.data === null ? '' : ('?' + _o_.utility.param(options.data))));
                        xhr.onload = function () {
                            if (xhr.status === 200)
                                if (options.success && _o_.compare.isFunction(options.success))
                                    options.success(xhr);

                                else
                                    _o_.fn.errorHandler(xhr, options.error);
                        };
                        xhr.send();
                    },
                    post: function () {
                        var xhr = core.createXhr();
                        xhr.open(options.method, options.url);
                        xhr.setRequestHeader('Content-Type', options.contentType);
                        xhr.onload = function () {
                            if (xhr.status === 200)
                                if (options.success && _o_.compare.isFunction(options.success))
                                    options.success(xhr);

                                else
                                    _o_.fn.errorHandler(xhr, options.error);
                        };
                        xhr.send(_o_.utility.param(options.data));
                    },
                    webApi: function () {
                        var xhr = core.createXhr();
                        xhr.open(options.method, options.url);
                        xhr.setRequestHeader('Content-Type', options.contentType);
                        xhr.onload = function () {
                            if (xhr.status === 200)
                                if (options.success && _o_.compare.isFunction(options.success))
                                    options.success(xhr);

                                else
                                    _o_.fn.errorHandler(xhr, options.error);
                        };
                        xhr.send(JSON.stringify(options.data));
                    }
                };

                switch (options.method.toLowerCase()) {
                    case 'get':
                        core.get();
                        break;
                    case 'post':
                        core.post();
                        break;
                    default:
                        core.webApi();
                        break;
                }
            }
        }
    };

    if (!window.octapush || !window._o_)
        window.octapushJS = window._o_ = _o_;
    else
        window.octapushJS = window._o_ = Object.assign(window._o_, _o_);
})();