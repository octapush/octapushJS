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
        /**
         * Generate octapush string art.
         * 
         * @param {string} char1 [default value is space character]
         * @param {any} char2 [default value is equal character]
         * @returns {string} octapush string art
         */
        copyleft: function (char1, char2) {
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

            var patternChars = [_o_.compare.ifNull(char1, ' '), _o_.compare.ifNull(char2, '=')];
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
        /**
         * Display octapush string art on browser console.
         */
        showCopyleft: function () {
            console.log(_o_.copyleft());
        },
        compare: {
            /**
             * Check the object is null or not
             * 
             * @param {any} obj
             * @returns {Boolean} returning TRUE if object is null or '' or undefined or array with length 0. Otherwise is FALSE.
             */
            isNullOrEmpty: function (obj) {
                return _o_.compare.isUndefined(obj) || null === obj || '' === obj || 0x0 === obj.length;
            },
            /**
             * 
             * Check the `obj` is having properties or not.
             * @param {object} obj
             * @returns {Boolean} returning TRUE if there are no properties inside `obj`. Otherwise is FALSE.
             */
            isEmpty: function (obj) {
                for (name in obj) return false;
                return true;
            },
            /**
             * Check the `obj` is undefined or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is UNDEFINED. Otherwise is FALSE.
             */
            isUndefined: function (obj) {
                return obj === undefined;
            },
            /**
             * Check the `obj` is defined or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is DEFINED. Otherwise is FALSE.
             */
            isDefined: function (obj) {
                return obj !== undefined;
            },
            /**
             * Check the `obj` is a number or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return FALSE if the `obj` is NUMBER. Otherwise is TRUE.
             */
            isNan: function (obj) {
                return isNaN(obj);
            },
            /**
             * Check the `obj` is a number or not
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is NUMBER. Otherwise is FALSE.
             */
            isNumber: function(obj) {
                return !isNaN(obj);
            },
            /**
             * Check the `obj` is a JS function or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is a JS function. Otherwise is FALSE.
             */
            isFunction: function (obj) {
                return obj instanceof Function || Object.prototype.toString().call(obj) === '[object Function]';
            },
            /**
             * Check the `obj` is a string or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is a string. Otherwise is FALSE.
             */
            isString: function (obj) {
                return obj.prototype.toString().call(obj) === '[object String]' || _o_.utility.getType(obj) === 'string';
            },
            /**
             * Check the `obj` is a BOOLEAN or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is a boolean. Otherwise is FALSE.
             */
            isBool: function (obj) {
                return obj === true || obj === false || Object.prototype.toString().call(obj) === '[object Boolean]';
            },
            /**
             * Check the `obj` is an array or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is an array. Otherwise is FALSE.
             */
            isArray: function (obj) {
                return _o_.compare.isUndefined(obj) ? false : _o_.utility.getType(obj) === 'object' || _o_.utility.getType(obj) === 'array';
            },
            /**
             * Check the `obj` is an integer or not.
             * 
             * @param {any} obj
             * @returns {Boolean} return TRUE if the `obj` is an integer. Otherwise is FALSE.
             */
            isInteger: function (obj) {
                return obj % 1 === 0;
            }
        },
        utility: {
            /**
             * Getting the `obj` data type
             * 
             * @param {any} obj
             * @returns {string} Data type name;
             */
            getType: function (obj) {
                return !arguments ? null : (null === obj ? obj + '' : (typeof obj).toString());
            },
            /**
             * Don't do anything
             */
            noop: function () {},
            /**
             * Don't do anything
             */
            noOperation: function () {},
            /**
             * Give the `defaultValue` if `obj` is NULL. Otherwise, give the `obj` value.
             * 
             * @param {any} obj
             * @param {any} defaultValue
             * @returns {any} 
             */
            ifNull: function (obj, defaultValue) {
                return _o_.compare.isNullOrEmpty(arguments) ? null : (!_o_.compare.isNullOrEmpty(obj) ? obj : defaultValue);
            },
            /**
             * Execute `func` for `nTime`. In other word, this is simplify for JS native looping.
             * 
             * @param {integer} nTime
             * @param {Func} func
             * @returns -
             */
            loop: function (nTime, func) {
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