/*
 === octapushJS.pluginName ===
 Author  : Fadhly Permata
 eMail   : fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer : Fadhly Permata

 === Contributors ===
 ... just type your name here after editing the script ...

 === THANKS TO : ===
 - CORS Handling : Monsur Hossain (https://www.html5rocks.com/en/tutorials/cors/)
 */

/**
 * NOTE:
 * - CORS test URL: http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html
 * - RESTFULL test URL: https://reqres.in/api/users
 */

(function (w) {
    'use strict';
    if (!w.octapushJS || !w._o_) {
        alert('octapushJS.ajax has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.13';

        var internal = {
            parseAndCallAjax: function (method, params) {
                var data = null;
                var success = null;

                if (!_o_.compare.isNullOrEmpty(params[1]) && !_o_.compare.isFunction(params[1]))
                    data = params[1];

                if (!_o_.compare.isNullOrEmpty(params[1]) && _o_.compare.isFunction(params[1]))
                    success = params[1];
                else {
                    success = params[2];
                }

                params = {
                    url: params[0],
                    data: data || null,
                    method: method,
                    success: success || null
                };

                _o_.ajax.request(params);
            }
        };

        _o_.ajax = Object.assign(_o_.utility.ifNull(_o_.ajax, {}), {
            request: function (params) {
                if (_o_.compare.isNullOrEmpty(params) || _o_.compare.isNullOrEmpty(params.url)) return;

                params = {
                    url: params.url || null,
                    data: params.data || null,
                    method: _o_.utility.ifNull(params.method, 'GET'),
                    success: params.success || null,
                    error: params.error || null,
                    headers: params.headers || {},
                    withCredentials: params.withCredentials || false
                };

                var xhr = null;

                // BOF: CROSS BROWSER SUPPORT
                // Chrome/Firefox/Opera/Safari/IE10+
                if (_o_.compare.isDefined(_o_.utility.getType(XMLHttpRequest))) {
                    xhr = new XMLHttpRequest();

                } else {
                    // check for XDomainRequest object
                    if (_o_.compare.isDefined(_o_.getType(XDomainRequest))) {
                        xhr = new XDomainRequest();

                    } else {
                        version = [
                            "MSXML2.XmlHttp.6.0",
                            "MSXML2.XmlHttp.5.0",
                            "MSXML2.XmlHttp.4.0",
                            "MSXML2.XmlHttp.3.0",
                            "MSXML2.XmlHttp.2.0",
                            "Microsoft.XmlHttp"
                        ];

                        // create xhr using higher version
                        for (var i = 0; i < version.length; i++) {
                            try {

                            } catch (e) {
                                if (!_o_.compare.isNullOrEmpty(params.error) && _o_.compare.isFunction(params.error))
                                    params.error(e);
                            }
                        }
                    }
                }
                // EOF: CROSS BROWSER SUPPORT

                if (params.method.toLowerCase() === 'get')
                    params.url = params.url + (_o_.compare.isNullOrEmpty(params.data) ? '' : '?' + params.data);

                xhr.open(params.method, params.url, true);


                // use credentials
                xhr.withCredentials = params.withCredentials;

                // set headers (preflight mode)
                _o_.utility.each(params.headers, function (key, val) {
                    if (val)
                        xhr.setRequestHeader(key, val);
                });

                // set response type & override mime type
                if (!_o_.compare.isNullOrEmpty(params.dataType)) {
                    xhr.responseType = params.dataType;

                    // var lType = ['', 'arraybuffer', 'blob', 'document', 'json', 'text']
                    // var lMime = ['application/json'];
                    //xhr.overrideMimeType('application/json');
                }

                xhr.send(params.method.toLowerCase() === 'get' ? null : params.data);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200 || xhr.status === 201 || xhr.status === 200) {
                            if (!_o_.compare.isNullOrEmpty(params.success) && _o_.compare.isFunction(params.success))
                                params.success(xhr);

                        } else {
                            if (!_o_.compare.isNullOrEmpty(params.error) && _o_.compare.isFunction(params.error))
                                params.error(xhr);
                        }
                    }
                };
            },

            // function (url, data, success)
            get: function (params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params))
                    _o_.ajax.request(params);

                else
                    internal.parseAndCallAjax('GET', arguments);
            },

            // function (url, data, success)
            post: function (params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params))
                    _o_.ajax.request(params);

                else
                    internal.parseAndCallAjax('POST', arguments);
            },

            put: function (params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params))
                    _o_.ajax.request(params);

                else
                    internal.parseAndCallAjax('PUT', arguments);
            },

            delete: function (params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params))
                    _o_.ajax.request(params);

                else
                    internal.parseAndCallAjax('DELETE', arguments);
            },

            patch: function (params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params))
                    _o_.ajax.request(params);

                else
                    internal.parseAndCallAjax('PATCH', arguments);
            }
        });
    }
})(window);