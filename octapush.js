/*
 === octapushJS ===
 Author  : Fadhly Permata
 eMail   : fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer : Fadhly Permata

 === Contributors ===
 ... just type your name here after editing the script ...
 */
(function(w) {
    'use strict';
    const version = '1.7.02.22';
    var internal = {
        parseAndCallAjax: function(method, params) {
            var data = null;
            var success = null;
            if (!_o_.compare.isNullOrEmpty(params[1]) && !_o_.compare.isFunction(params[1])) data = params[1];
            if (!_o_.compare.isNullOrEmpty(params[1]) && _o_.compare.isFunction(params[1])) success = params[1];
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
    var _o_ = {
        settings: {
            pluginsPath: 'https://raw.githubusercontent.com/octapush/octapushJS/dev/plugins/',
        },
        /**
         * @desc Buffer for localization storage.
         */
        localization: {},
        /**
         * @desc Returning octapushJS core version.
         */
        version: version,
        /**
         * @desc Generate octapush string art.
         * @param {string} char1 [default value is space character]
         * @param {string} char2 [default value is equal character]
         * @returns {string} octapush string art
         */
        copyleft: function(char1, char2) {
            var artPattern = [
                [0x5c],
                [0x1e, 0x3, 0x33, 0x3, 0x5],
                [0x1e, 0x3, 0x33, 0x3, 0x5],
                [0xa, 0x5, 0x6, 0x5, 0x3, 0x3, 0x8, 0x6, 0x3, 0x2, 0x1, 0x5, 0x3, 0x3, 0x3, 0x3, 0x5, 0x5, 0x4, 0x3, 0x6],
                [0x7, 0x3, 0x2, 0x3, 0x3, 0x3, 0x2, 0x3, 0x2, 0x7, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x2, 0x3, 0x1, 0x4, 0x2],
                [0x5, 0x3, 0x3, 0x3, 0x2, 0x3, 0x8, 0x6, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x2, 0x5, 0x6, 0x3, 0x3, 0x3, 0x2],
                [0x4, 0x3, 0x3, 0x3, 0x2, 0x3, 0x8, 0x3, 0x6, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x3, 0x6, 0x4, 0x3, 0x3, 0x3, 0x3],
                [0x3, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x2, 0x3, 0x6, 0x3, 0x3, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x3, 0x3, 0x5, 0x5, 0x3, 0x3, 0x3, 0x3, 0x4],
                [0x2, 0x3, 0x2, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x7, 0x2, 0x3, 0x2, 0x1, 0x1, 0x2, 0x3, 0x3, 0x1, 0x3, 0x4, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x2, 0x3, 0x3, 0x3, 0x5],
                [0x2, 0x5, 0x6, 0x5, 0x6, 0x5, 0x4, 0x4, 0x2, 0x3, 0x2, 0x5, 0x7, 0x5, 0x1, 0x3, 0x3, 0x5, 0x4, 0x3, 0x4, 0x3, 0x5],
                [0x2b, 0x3, 0x2e],
                [0x2b, 0x3, 0x2e],
                [0x5c]
            ];
            var patternChars = [_o_.utility.ifNull(char1, ' '), _o_.utility.ifNull(char2, '=')];
            var str = '';
            artPattern.forEach(function(el, idx, arr) {
                var charMode = true;
                str += '\n';
                el.forEach(function(el, idx, arr) {
                    charMode = !charMode;
                    str += new Array(el + 1)
                        .join(patternChars[charMode ? 0x1 : 0x0]);
                });
            });
            return str;
        },
        /**
         * @desc Display octapush string art on browser console.
         */
        showCopyleft: function() {
            console.log(_o_.copyleft());
        },
        compare: {
            /**
             * @description Check the object is null or not
             * 
             * @param {any} obj
             * @returns {bool} returning TRUE if object is null or '' or undefined or array with length 0. Otherwise is FALSE.
             */
            isNullOrEmpty: function(obj) {
                return _o_.compare.isUndefined(obj) || null === obj || '' === obj || 0x0 === obj.length;
            },
            /**
             * @description Check the `obj` is having properties or not.
             * 
             * @param {object} obj
             * @returns {bool} returning TRUE if there are no properties inside `obj`. Otherwise is FALSE.
             */
            isEmpty: function(obj) {
                for (name in obj) return false;
                return true;
            },
            /**
             * @description Check the `obj` is undefined or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is UNDEFINED. Otherwise is FALSE.
             */
            isUndefined: function(obj) {
                return obj === undefined;
            },
            /**
             * @description Check the `obj` is defined or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is DEFINED. Otherwise is FALSE.
             */
            isDefined: function(obj) {
                return obj !== undefined;
            },
            /**
             * @description Check the `obj` is a number or not.
             * 
             * @param {any} obj
             * @returns {bool} return FALSE if the `obj` is NUMBER. Otherwise is TRUE.
             */
            isNan: function(obj) {
                return isNaN(obj);
            },
            /**
             * @description Check the `obj` is a number or not
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is NUMBER. Otherwise is FALSE.
             */
            isNumber: function(obj) {
                return !isNaN(obj);
            },
            /**
             * @description Check the `obj` is a JS function or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a JS function. Otherwise is FALSE.
             */
            isFunction: function(obj) {
                return obj instanceof Function || _o_.utility.getType(obj) === 'function' || obj.__proto__.toString() === 'function () {\n}';
            },
            /**
             * @description Check the `obj` is a string or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a string. Otherwise is FALSE.
             */
            isString: function(obj) {
                return obj.__proto__ === '[object String]' || _o_.utility.getType(obj) === 'string';
            },
            /**
             * @description Check the `obj` is a boolean or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a boolean. Otherwise is FALSE.
             */
            isBool: function(obj) {
                return obj === true || obj === false || obj.__proto__ === '[object Boolean]' || _o_.utility.getType(obj) === 'boolean';
            },
            /**
             * @description Check the `obj` is an array or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is an array. Otherwise is FALSE.
             */
            isArray: function(obj) {
                return _o_.compare.isUndefined(obj) ? false : Array.isArray(obj);
            },
            /**
             * @description Check the `obj` is an integer or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is an integer. Otherwise is FALSE.
             */
            isInteger: function(obj) {
                return obj % 0x1 === 0x0;
            },
            /**
             * @description Check the `obj` is a float or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is an float. Otherwise is FALSE.
             */
            isFloat: function(obj) {
                return Number(obj) === obj && obj % 1 !== 0;
            },
            /**
             * @description Check the `obj` is a JSON object or not.
             * 
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a JSON object. Otherwise is FALSE.
             */
            isJsonObject: function(obj) {
                return _o_.compare.isUndefined(obj) ? false : (_o_.compare.isFunction(obj) ? false : {}.constructor === obj.constructor)
            }
        },
        utility: {
            /**
             * @description Getting the `obj` data type
             * 
             * @param {any} obj
             * @returns {string} Data type name;
             */
            getType: function(obj) {
                return !arguments ? null : (null === obj ? obj + '' : (typeof obj)
                    .toString());
            },
            /**
             * @description Don't do anything
             */
            noop: function() {},
            /**
             * @description Don't do anything
             */
            noOperation: function() {},
            /**
             * @description Give the `defaultValue` if `obj` is NULL. Otherwise, give the `obj` value.
             * 
             * @param {any} obj
             * @param {any} defaultValue
             * @returns {any}  Return the `defaultValue` if `obj` is NULL. Otherwise, give the `obj` value.
             */
            ifNull: function(obj, defaultValue) {
                return _o_.compare.isNullOrEmpty(arguments) ? null : (!_o_.compare.isNullOrEmpty(obj) ? obj : defaultValue);
            },
            /**
             * @description Execute `func` for `nTime`. In other word, this is simplify for JS native looping.
             * 
             * @param {Number} nTime
             * @param {Func} func
             * @returns -
             */
            loop: function(nTime, func) {
                if (!func) return;
                for (var i = 0x0; i < nTime; i++)
                    if (func && _o_.compare.isFunction(func)) func(i);
            },
            /**
             * @description Do some actions for each element inside `obj`
             * 
             * @param {object} `obj` the object which will be iterated.
             * @param {function} `callback` the callback to be processed.
             * @param {any} args the arguments to be called by `callback`
             * @returns the original `obj`
             */
            each: function(obj, callback, args) {
                var value = null;
                var i = 0;
                var BreakException = {};
                if (callback) {
                    if (args) {
                        if (_o_.compare.isArray(obj)) obj.forEach(function(val, key) {
                            value = callback.apply(val, args);
                            if (false === value) throw BreakException;
                        });
                        else
                            for (i in obj) {
                                value = callback.apply(obj[i], args);
                                if (false === value) break;
                            }
                    } else {
                        if (_o_.compare.isArray(obj)) obj.forEach(function(val, key) {
                            value = callback.call(val, key, val);
                            if (false === value) throw BreakException;
                        });
                        else
                            for (i in obj) {
                                value = callback.call(obj[i], i, obj[i]);
                                if (false === value) break;
                            }
                    }
                }
                return obj;
            },
            /**
             * @description Do some actions for each element inside `obj`
             * 
             * @param {object} `obj` the object which will be iterated.
             * @param {function} `callback` the callback to be processed.
             * @param {any} args the arguments to be called by `callback`
             * @returns the original `obj`
             */
            forEach: function(obj, callback, args) {
                _o_.utility.each(obj, callback, args)
            },
            /**
             * @description Merge the contents of two or more objects together into the first object.
             * 
             * @param {object} `objects` The object to be merged.
             * @returns {object} Returning merged object.
             */
            extend: function(objects) {
                var argues = arguments;
                return _o_.compare.isNullOrEmpty(argues) ? null : (function() {
                    Array.prototype.slice.call(argues, 1)
                        .forEach(function(source) {
                            for (var key in source)
                                if (source[key] !== undefined) objects[key] = source[key]
                        });
                    return objects
                })();
            },
            /**
             * @description Including octapush plugin.
             * 
             * @param {string} pluginName. Available command (plugin) is 'string', 'array', 'number', 'datetime'
             * @param {function} callback. A callback which will be processed after loading plugin is done. 
             * @returns -
             */
            includePlugin: function(pluginName, callback) {
                if (_o_.compare.isNullOrEmpty(arguments) || _o_.compare.isNullOrEmpty(pluginName)) return;
                if (_o_.hasOwnProperty(pluginName)) return;
                var pluginFile = ['octapush.', pluginName, '.js'].join('');
                var pluginUrl = [_o_.settings.pluginsPath, pluginFile].join('');
                _o_.ajax.getScript(pluginUrl, function(xhr) {
                    eval(xhr.responseText);
                    if (callback) callback();
                });
            }
        },
        ajax: {
            /**
             * @description AJAX request
             * 
             * @param {object} params. see below for detail.
             * @returns -
             */
            request: function(params) {
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
                        version = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"];
                        // create xhr using higher version
                        for (var i = 0; i < version.length; i++) {
                            try {
                                xhr = new ActiveXObject(version[i]);
                            } catch (e) {
                                if (!_o_.compare.isNullOrEmpty(params.error) && _o_.compare.isFunction(params.error)) params.error(e);
                            }
                        }
                    }
                }
                // EOF: CROSS BROWSER SUPPORT
                if (params.method.toLowerCase() === 'get') params.url = params.url + (_o_.compare.isNullOrEmpty(params.data) ? '' : '?' + params.data);
                xhr.open(params.method, params.url, true);
                // use credentials
                xhr.withCredentials = params.withCredentials;
                // set headers (preflight mode)
                _o_.utility.each(params.headers, function(key, val) {
                    if (val) xhr.setRequestHeader(key, val);
                });
                xhr.send(params.method.toLowerCase() === 'get' ? null : params.data);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200 || xhr.status === 201 || xhr.status === 200) {
                            if (!_o_.compare.isNullOrEmpty(params.success) && _o_.compare.isFunction(params.success)) params.success(xhr);
                        } else {
                            if (!_o_.compare.isNullOrEmpty(params.error) && _o_.compare.isFunction(params.error)) params.error(xhr);
                        }
                    }
                };
            },
            // function (url, callback)
            getScript: function(url, callback) {
                _o_.ajax.get(url, function(xhr) {
                    eval(xhr.responseText);
                    if (!_o_.compare.isNullOrEmpty(callback) && _o_.compare.isFunction(callback)) callback(xhr);
                });
            },
            // function (url, data, success)
            get: function(params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params)) _o_.ajax.request(params);
                else internal.parseAndCallAjax('GET', arguments);
            },
            // function (url, data, success)
            post: function(params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params)) _o_.ajax.request(params);
                else internal.parseAndCallAjax('POST', arguments);
            },
            put: function(params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params)) _o_.ajax.request(params);
                else internal.parseAndCallAjax('PUT', arguments);
            },
            delete: function(params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params)) _o_.ajax.request(params);
                else internal.parseAndCallAjax('DELETE', arguments);
            },
            patch: function(params) {
                if (arguments.length == 1 && _o_.compare.isJsonObject(params)) _o_.ajax.request(params);
                else internal.parseAndCallAjax('PATCH', arguments);
            }
        }
    };
    _o_.showCopyleft();
    w.octapushJS = w._o_ = _o_;
})(window);