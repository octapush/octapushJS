/*
 === octapushJS.pluginName ===
 Author  : Fadhly Permata
 eMail   : - fadhly.permata@gmail.com
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

/**
 * TODO: 
 * - ADD parameterize())
 */

(function (w) {
    'use strict';
    if (!w.octapushJS || !w._o_) {
        alert('octapushJS.ajax has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.13';

        _o_.string = Object.assign(_o_.utility.ifNull(_o_.string, {}), {
            convertToQueryString: function(object) {
                return !_o_.compare.isJsonObject(object) ?
                    object :
                    (
                        Object.keys(object).reduce(function(acc, val) {
                            var prefix = !acc ? '' : [acc, '&'].join(''); 
                            return [
                                prefix,
                                encodeURIComponent(val),
                                '=',
                                encodeURIComponent(object[val])
                            ].join('');
                        })
                    );
            }
        });

        _o_.ajax = Object.assign(_o_.utility.ifNull(_o_.ajax, {}), {
            request: function (params) {
                var xhr = null;

                params = {
                    url: params.url || null,
                    data: params.data || null,
                    method: _o_.utility.ifNull(params.method, 'GET'),
                    async: _o_.utility.ifNull(params.async, false),
                    success: params.success || null,
                    error: params.error || null, 
                    headers: _o_.utility.ifNull(params.headers, {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    })
                };

                if (_o_.compare.isNullOrEmpty(params)) return;

                // BOF : create XHR
                // Chrome/Firefox/Opera/Safari
                if (_o_.compare.isDefined(_o_.utility.getType(XMLHttpRequest))) {
                    xhr = new XMLHttpRequest();

                } else {
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

                        for (var i = 0; i < version.length; i++) {
                            try {
                                xhr = new ActiveXObject(version[i]);
                                break;

                            } catch (e) {
                                if (!_o_.compare.isNullOrEmpty(params.error) && _o_.compare.isFunction(params.error))
                                    params.error(e);
                            }
                        }
                    }
                }
                // EOF : create XHR

                // CORS support handler
                if (params.method.toLowerCase() === 'get')
                    params.url = params.url + (_o_.compare.isNullOrEmpty(params.data) ? '' : '?' + params.data);

                if (("withCredentials" in xhr) && (_o_.compare.isDefined(_o_.utility.getType(XMLHttpRequest)))) {
                    xhr.open(params.method, params.url, true);

                } else {
                    xhr.open(params.method, params.url);
                }

                // set headers
                //xhr.setRequestHeader('Content-Type', params.type);
                if (_o_.compare.isNullOrEmpty(params.headers['X-Requested-With']))
                    params.headers = Object.assign(_o_.utility.ifNull(params.headers, {}), {
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    
                Object.keys(params.headers).forEach(function(key) {
                    (params.headers[key] && xhr.setRequestHeader(key, params.headers[key]))
                });

                xhr.send(params.method.toLowerCase() === 'get' ? null : params.data);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) {
                            if (!_o_.compare.isNullOrEmpty(params.success) && _o_.compare.isFunction(params.success))
                                params.success(xhr);

                        } else {
                            if (!_o_.compare.isNullOrEmpty(params.error) && _o_.compare.isFunction(params.error))
                                params.error(xhr);
                        }
                    }
                };
            },

            get: function (url, data, success, error) {
                _o_.ajax.request({
                    url: url,
                    data: data,
                    method: 'GET',
                    success: success,
                    error: error
                });
            },

            post: function (url, data, success, error) {
                _o_.ajax.request({
                    url: url,
                    data: data,
                    method: 'POST',
                    success: success,
                    error: error
                });
            },

            put: function (url, data, success, error) {
                _o_.ajax.request({
                    url: url,
                    data: data,
                    method: 'PUT',
                    success: success,
                    error: error
                });
            },

            delete: function (url, success, error) {
                _o_.ajax.request({
                    url: url,
                    success: success,
                    error: error
                });
            },
            
            patch: function (url, data, success, error) {
                _o_.ajax.request({
                    url: url,
                    data: data,
                    method: 'PATCH',
                    success: success,
                    error: error
                });
            }
        });
    }
})(window);