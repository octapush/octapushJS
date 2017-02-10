/*
 === octapushJS ===
 Author  : Fadhly Permata
 eMail   : - fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer : Fadhly Permata

 === Contributors ===
 ... just type your name here after editing the script ...
 */

(function () {
    'use strict';
    var version = '1.7.02.10';

    var _o_ = {
        version: version,
        copyleft: function () {
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

            var patternChars = [' ', '='];
            var str = '';

            artPattern.forEach(function (el, idx, arr) {
                var charMode = true;
                str += '\n';

                el.forEach(function (el, idx, arr) {
                    charMode = !charMode;

                    for (var i = 0; i < el; i++) {
                        str += patternChars[charMode ? 1 : 0];
                    }
                });
            });

            return str;
        },
        showCopyleft: function() {
            console.log(_o_.copyleft());
        },
        compare: {
            isNullOrEmpty: function(obj) {
                return _o_.compare.isUndefined(obj) || null === obj || '' === obj || 0x0 === obj.length;
            },
            isEmpty: function(obj) {
                for (name in obj) return false;
                return true;
            },
            isUndefined: function(obj) {
                return obj === undefined;
            },
            isDefined: function(obj) {
                return obj !== undefined;
            },
            isNan: function(obj) {
                return isNaN(obj);
            },
            isFunction: function(obj) {
                return obj instanceof Function || Object.prototype.toString().call(obj) === '[object Function]';
            },
            isString: function(obj) {
                return obj.prototype.toString().call(obj) === '[object String]' || _o_.utility.getType(obj) === 'string';
            },
            isBool: function(obj) {
                return obj === true || obj === false || Object.prototype.toString().call(obj) === '[object Boolean]';
            },
            isArray: function(obj) {
                return _o_.compare.isUndefined(obj) ? false : _o_.utility.getType(obj) === 'object' || _o_.utility.getType(obj) === 'array';
            },
            isInteger: function(obj) {
                return obj % 1 === 0;
            }
        },
        utility: {
            noop: function () {},
            noOperation: function () {},
            getType: function (obj) {
                return !arguments ? null : (null === obj ? obj + '' : (typeof obj).toString());
            },
            ifNull: function (obj, defaultValue) {
                return _o_.compare.isNullOrEmpty(arguments) ? null : (!_o_.compare.isNullOrEmpty(obj) ? obj : defaultValue);
            },
            loop: function(nTime, func) {
                if (!func) return;
                
                for (var i = 0; i < nTime; i++) {
                    if (func && _o_.compare.isFunction(func))
                        func(i);
                }
            }
        }
    };

    _o_.showCopyleft();
    window.octapushJS = window._o_ = _o_;
})();