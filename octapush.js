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

/**
 * TODO:
 * - ADD AJAX
 * - REVISE each/forEach method into jquery like
 */

(function (w) {
    'use strict';
    const version = '1.7.02.13';

    var _o_ = {
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

            var patternChars = [_o_.utility.ifNull(char1, ' '), _o_.utility.ifNull(char2, '=')];
            var str = '';

            artPattern.forEach(function (el, idx, arr) {
                var charMode = true;
                str += '\n';

                el.forEach(function (el, idx, arr) {
                    charMode = !charMode;
                    str += new Array(el + 1).join(patternChars[charMode ? 0x1 : 0x0]);
                });
            });

            return str;
        },
        /**
         * @desc Display octapush string art on browser console.
         */
        showCopyleft: function () {
            console.log(_o_.copyleft());
        },
        compare: {
            /**
             * @desc Check the object is null or not
             * @param {any} obj
             * @returns {bool} returning TRUE if object is null or '' or undefined or array with length 0. Otherwise is FALSE.
             */
            isNullOrEmpty: function (obj) {
                return _o_.compare.isUndefined(obj) || null === obj || '' === obj || 0x0 === obj.length;
            },
            /**
             * @desc Check the `obj` is having properties or not.
             * @param {object} obj
             * @returns {bool} returning TRUE if there are no properties inside `obj`. Otherwise is FALSE.
             */
            isEmpty: function (obj) {
                for (name in obj) return false;
                return true;
            },
            /**
             * @desc Check the `obj` is undefined or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is UNDEFINED. Otherwise is FALSE.
             */
            isUndefined: function (obj) {
                return obj === undefined;
            },
            /**
             * @desc Check the `obj` is defined or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is DEFINED. Otherwise is FALSE.
             */
            isDefined: function (obj) {
                return obj !== undefined;
            },
            /**
             * @desc Check the `obj` is a number or not.
             * @param {any} obj
             * @returns {bool} return FALSE if the `obj` is NUMBER. Otherwise is TRUE.
             */
            isNaN: function (obj) {
                return isNaN(obj);
            },
            /**
             * @desc Check the `obj` is a number or not
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is NUMBER. Otherwise is FALSE.
             */
            isNumber: function (obj) {
                return !isNaN(obj);
            },
            /**
             * @desc Check the `obj` is a JS function or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a JS function. Otherwise is FALSE.
             */
            isFunction: function (obj) {
                return obj instanceof Function || _o_.utility.getType(obj) === 'function' || obj.__proto__.toString() === 'function () {\n}';
            },
            /**
             * @desc Check the `obj` is a string or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a string. Otherwise is FALSE.
             */
            isString: function (obj) {
                return obj.__proto__ === '[object String]' || _o_.utility.getType(obj) === 'string';
            },
            /**
             * @desc Check the `obj` is a boolean or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a boolean. Otherwise is FALSE.
             */
            isBool: function (obj) {
                return obj === true || obj === false || obj.__proto__ === '[object Boolean]' || _o_.utility.getType(obj) === 'boolean';
            },
            /**
             * @desc Check the `obj` is an array or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is an array. Otherwise is FALSE.
             */
            isArray: function (obj) {
                return _o_.compare.isUndefined(obj) ? false : Array.isArray(obj);
            },
            /**
             * @desc Check the `obj` is an integer or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is an integer. Otherwise is FALSE.
             */
            isInteger: function (obj) {
                return obj % 0x1 === 0x0;
            },
            /**
             * @desc Check the `obj` is a float or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is an float. Otherwise is FALSE.
             */
            isFloat: function (obj) {
                return Number(obj) === obj && obj % 1 !== 0;
            },
            /**
             * @desc Check the `obj` is a JSON object or not.
             * @param {any} obj
             * @returns {bool} return TRUE if the `obj` is a JSON object. Otherwise is FALSE.
             */
            isJsonObject: function (obj) {
                return _o_.compare.isUndefined(obj) ?
                    false :
                    (
                        _o_.compare.isFunction(obj) ?
                        false : {}.constructor === obj.constructor
                    )
            }
        },
        utility: {
            /**
             * @desc Getting the `obj` data type
             * @param {any} obj
             * @returns {string} Data type name;
             */
            getType: function (obj) {
                return !arguments ?
                    null :
                    (null === obj ? obj + '' : (typeof obj).toString());
            },
            /**
             * @desc Don't do anything
             */
            noop: function () {},
            /**
             * @desc Don't do anything
             */
            noOperation: function () {},
            /**
             * @desc Give the `defaultValue` if `obj` is NULL. Otherwise, give the `obj` value.
             * @param {any} obj
             * @param {any} defaultValue
             * @returns {any}  Return the `defaultValue` if `obj` is NULL. Otherwise, give the `obj` value.
             */
            ifNull: function (obj, defaultValue) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    null :
                    (!_o_.compare.isNullOrEmpty(obj) ? obj : defaultValue);
            },
            /**
             * @desc Execute `func` for `nTime`. In other word, this is simplify for JS native looping.
             * @param {Number} nTime
             * @param {Func} func
             * @returns -
             */
            loop: function (nTime, func) {
                if (!func) return;

                for (var i = 0x0; i < nTime; i++)
                    if (func && _o_.compare.isFunction(func))
                        func(i);
            },
            each: function (obj, callback, flattenNested) {
                if (_o_.compare.isNullOrEmpty(arguments) || _o_.compare.isNullOrEmpty(obj))
                    return;

                flattenNested = _o_.utility.ifNull(flattenNested, false);

                if (_o_.compare.isArray(obj)) {
                    obj.forEach(function (val, key, arr) {
                        if (_o_.compare.isArray(val) || _o_.compare.isJsonObject(val)) {
                            if (flattenNested)
                                _o_.utility.each(val, callback, flattenNested);
                            else
                            if (callback) callback(key, val);

                        } else {
                            if (callback) callback(key, val);
                        }
                    });

                } else if (_o_.compare.isJsonObject(obj)) {
                    for (var key in obj) {
                        if (_o_.compare.isArray(obj[key]) || _o_.compare.isJsonObject(obj[key])) {
                            if (flattenNested)
                                _o_.utility.each(obj[key], callback, flattenNested);
                            else
                            if (callback) callback(key, obj[key]);

                        } else {
                            if (callback) callback(key, obj[key]);
                        }
                    }
                }
            },
            forEach: function (obj, callback) {
                _o_.utility.each(obj, callback)
            },
            extend: function (objects) {
                var argues = arguments;
                return _o_.compare.isNullOrEmpty(argues) ?
                    null :
                    (function () {
                        Array.prototype.slice.call(argues, 1).forEach(function (source) {
                            for (var key in source)
                                if (source[key] !== undefined)
                                    objects[key] = source[key]
                        });
                        return objects
                    })();
            }
        }
    };

    _o_.showCopyleft();
    w.octapushJS = w._o_ = _o_;
})(window);