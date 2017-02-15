/*
 === octapushJS ===
 Author  : Fadhly Permata
 eMail   : fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer            : Fadhly Permata (Octapush Team)
 Developer Team Support     : Adam Sumarna   (Octapush Team)

 === Contributors ===
 ... just type your name here after editing the script ...
 */
(function () {
    'use strict';
    var currentVersion = '1.6.80';
    //noinspection JSCheckFunctionSignatures
    var _o_ = {
        /**** LIBRARY CONFIGURATION AREA ****/
        /** ======================================================================== **/
        settings: {
            /*
             * if TRUE octapushJS will write copyleft message to the browser console,
             * set it to FALSE if you does not want to show this.
             */
            writeCopyleftMessageToConsole: false,
            /*
             * This section will be used to handling some localization options
             */
            localization: {
                datetime: {
                    translator: 'Fadhly Permata',
                    lang: 'EN-US',
                    dayName: {
                        short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                    },
                    monthName: {
                        short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                    }
                }
            }
        },
        /** ======================================================================== **/

        /** ======================================================================== **/
        /**
         *  Desc    : Show current version of octapushJS
         *  Params  : -
         *  OnError : -
         *  Return  : (String) current version of octapushJS
         **/
        version: function () {
            return currentVersion
        },
        copyleftMessage: function () {
            var patternArt = [
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

            var patternChar = [' ', '='];

            var str = '';
            _o_.utility.each(patternArt, function (key, value) {
                var charMode = true;
                str += '\n';
                _o_.utility.each(value, function (idx, val) {
                    charMode = !charMode;
                    str += _o_.string.repeat(patternChar[charMode ? 1 : 0], val, '');
                });
            });
            var currentYear = _o_.datetime.year();
            var strCopyleft = _o_.string.format('Copyleft @ 2015{0} Fadhly Permata', [currentYear == 2015 ? '' : _o_.string.concat(' - ', currentYear)]);
            str = _o_.string.format('octapushJS - Most complete JavaScript library\n{0}{1}{0}', [_o_.string.repeat('_', 92), str]);
            str += _o_.string.format('\n{1}{0}', [strCopyleft, _o_.string.repeat(' ', 92 - strCopyleft.length, '')]);

            return str;
        },
        copyleftToConsole: function () {
            console.log(_o_.copyleftMessage());
        },
        utility: {
            /**
             *  Desc    : Do nothing (Synonym for No-Operation)
             *  Params  : -
             *  OnError : -
             *  Return  : -
             *  Sample  : var x = 5;
             *            if (x * 5 == 25) {
             *              _o_.utility.noop();
             *            }
             **/
            noop: function () {
            },
            /**
             *  Desc    : Get data type (name) from {obj}.
             *  Params  : - {obj} : (Any) The object that will be checked.
             *  OnError : Returning NULL if called without any parameter assigned.
             *  Return  : (String) Name of object type.
             *  Sample  : var myName = 'Fadhly Permata'
             *            var dType = _o_.utility.getType(myName);
             *            alert(dType);
             **/
            getType: function (obj) {
                return !arguments ? null : null === obj
                    ? obj + ''
                    : (typeof obj).toString();
            },
            /**
             *  Desc    : Check the {obj} value, if {obj} does not have value or NULL, then
             *            return the {newValue}.
             *  Params  : - {obj}      : (Any) The object that will be checked.
             *            - {newValue} : (Any) The value that will be used when {obj}
             *                           is NULL.
             *  Return  : - Returning NULL if called without any parameter assigned.
             *            - Will return {obj} value if it's not null. Otherwise,
             *              {newValue} will be given.
             *  Sample  : var myName;
             *            myName = _o_.utility.ifNull(myName, 'Fadhly Permata');
             *            alert(myName);
             **/
            ifNull: function (obj, newValue) {
                return _o_.compare.isNullOrEmpty(arguments) ? null : !_o_.compare.isNullOrEmpty(obj)
                    ? obj
                    : newValue;
            },
            loop: function (nTime, func) {
                for (var i = 0; i < nTime; i++) {
                    func(i);
                }
            },
            /**
             *  Desc    : Do some actions for each element inside {obj}
             *  Params  : - {obj}      : (Array/List/Collection/Object) that will be
             *                           checked and processed for each element inside
             *                           it.
             *            - {callback} : (Function) The function that will be called
             *                           for each element of {obj}.
             *  Return  : {obj}
             *  Sample  : var alpha = ['a', 'b', 'c', 'd'];
             *            _o_.each(alpha, function(key, value) {
             *              console.log(value);
             *            });
             **/
            each: function (obj, callback, args) {
                var value, i = 0,
                    length = obj.length,
                    isArray = _o_.compare.isArray(obj);
                if (callback)
                    if (args) {
                        if (isArray)
                            for (; i < length; i++) {
                                value = callback.apply(obj[i], args);
                                if (false === value) break
                            }

                        else
                            for (i in obj) {
                                //noinspection JSUnfilteredForInLoop
                                value = callback.apply(obj[i], args);
                                if (false === value) break
                            }
                    } else {
                        if (isArray)
                            for (; i < length; i++) {
                                value = callback.call(obj[i], i, obj[i]);
                                if (false === value) break
                            } else
                            for (i in obj) {
                                //noinspection JSUnfilteredForInLoop
                                value = callback.call(obj[i], i, obj[i]);
                                if (false === value) break
                            }
                    }
                return obj
            },
            /**
             *  Desc    : Do some actions for each element inside {obj}
             *  Params  : - {obj}      : (Array/List/Collection/Object) that will be
             *                           checked and processed for each element inside
             *                           it.
             *            - {callback} : (Function) The function that will be called
             *                           for each element of {obj}.
             *  Return  : {obj}
             *  Sample  : var alpha = ['a', 'b', 'c', 'd'];
             *            _o_.each(alpha, function(key, value) {
             *              console.log(value);
             *            });
             **/
            forEach: function (obj, callback, args) {
                return _o_.utility.each(obj, callback, args)
            },
            /**
             *  Desc    : Get the host (URL) of page which calling the script.
             *            This method only available if you calling the page from
             *            web server application.
             *  Params  : -
             *  Return  : (String) Host (URL) of current page.
             *  Sample  : var url = _o_.utility.currentHost();
             *            alert(url);
             **/
            currentHost: function () {
                return location.host
            }
        },
        compare: {
            /**
             *  Desc    : Can be used to check the {obj} value, the value is equal to
             *            NULL or UNDEFINED
             *  Params  : - {obj} : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} does not have value or
             *            UNDEFINED. Otherwise, FALSE.
             *  Sample   : var myData;
             *             alert(_o_.compare.isNullOrEmpty(myData));
             **/
            isNullOrEmpty: function (obj) {
                return _o_.compare.isUndefined(obj) || null === obj || '' === obj || 0x0 === obj.length
            },
            /**
             *  Desc    : Can be used to check the {obj} elements.
             *  Params  : - {obj}   : (Array/List/Collection/Object) The object that will
             *                        be checked.
             *  Return  : Return TRUE value if the {obj} does not have any element. Otherwise,
             *            FALSE.
             *
             *  Sample  : var myData;
             *            alert(_o_.compare.isEmpty(myData));
             **/
            isEmpty: function (obj) {
                var name;
                //noinspection LoopStatementThatDoesntLoopJS
                for (name in obj) return false;
                return true
            },
            /**
             *  Desc    : Can be used to check the {obj} definition, its UNDEFINED or not.
             *  Params  : - {obj}      : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} is UNDEFINED. Otherwise, FALSE.
             *  Sample  : var myData;
             *            alert(_o_.compare.isUndefined(myData));
             **/
            isUndefined: function (obj) {
                return obj === undefined
            },
            /**
             *  Desc    : Can be used to check the {obj} definition, its DEFINED or not.
             *  Params  : - {obj}   : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} is DEFINED. Otherwise, FALSE.
             *  Sample  : var myData;
             *            alert(_o_.compare.isDefined(myData));
             **/
            isDefined: function (obj) {
                return obj !== undefined
            },
            /**
             *  Desc    : Can be used to check the {obj} value, its value is numeric type
             *            or not.
             *            We still assuming String with numeric value (e.g: '13') is not
             *            a numeric type.
             *  Params  : - {obj}   : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} value is non numerical type.
             *            Otherwise, FALSE.
             *  Sample  : var myData = 13;
             *            alert(_o_.compare.isNaN(myData));
             **/
            isNaN: function (obj) {
                return isNaN(obj)
            },
            /**
             *  Desc    : Can be used to check the {obj} value, it is a FUNCTION or not
             *  Params  : - {obj}   : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} is a FUNCTION object. Otherwise
             *                 FALSE.
             *  Sample  : var myFunc = function() {
             *              alert('Hello, my name is Fadhly Permata.')
             *            };
             *            alert(_o_.compare.isFunction(myFunc));
             **/
            isFunction: function (obj) {
                return obj instanceof Function || Object.prototype.toString().call(obj) === '[object Function]'
            },
            /**
             *  Desc    : Can be used to check the {obj} value, it is a STRING or not
             *  Params  : - {obj} : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} is a STRING object. Otherwise
             *            FALSE.
             *  Sample  : var message = 'Hello, my name is Fadhly Permata.'
             *            alert(_o_.compare.isString(message));
             **/
            isString: function (obj) {
                return obj.prototype.toString().call(obj) === '[object String]' || _o_.utility.getType(obj) === 'string'
            },
            /**
             *  Desc    : Can be used to check the {obj} value, its a boolean data type or not.
             *  Params  : - {obj}   : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} is a Boolean data type. Otherwise,
             *            FALSE.
             *  Sample  : var myData = false;
             *            alert(_o_.compare.isBoolean(myData));
             **/
            isBoolean: function (obj) {
                return obj === true || obj === false || Object.prototype.toString().call(obj) === '[object Boolean]'
            },
            /**
             *  Desc    : Can be used to check the {obj} value, its an
             *            Array/List/Collection/Object or not.
             *  Params  : - {obj}   : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} is an Array/List/Collection/Object
             *            data type. Otherwise, FALSE.
             *  Sample  : var myData = ['Fadhly', 'Permata'];
             *            alert(_o_.compare.isArray(myData));
             **/
            isArray: function (obj) {
                return _o_.compare.isUndefined(obj) ? false : _o_.utility.getType(obj) === 'object' || _o_.utility.getType(obj) === 'array'
            },
            /**
             *  Desc    : Can be used to check the {obj} value, Integer or not.
             *  Params  : - {obj}   : (Any) The object that will be checked.
             *  Return  : Return TRUE value if the {obj} is an Integer data type.
             *            Otherwise, FALSE.
             *  Sample  : var myData = 13;
             *            alert(_o_.compare.isInteger(myData));
             **/
            isInteger: function (obj) {
                return obj % 1 === 0;
            }
        },
        string: {
            // COMPARATOR
            /**
             *  Desc    : Can be used to check equality from two string
             *  Params  : - {str1}          : (String) the string that will be
             *                                checked.
             *            - {str2}          : (String) the string that will
             *                                be used as comparator.
             *            - {caseSensitive} : [optional](Boolean) Case sensitive
             *                                mode flag.
             *  Return  : Return TRUE value if the {str1} is equal to the {str2}.
             *            Otherwise, FALSE.
             *  Sample  : var name1 = 'fadhly';
             *                 var name2 = 'Fadhly';
             *                 alert(_o_.string.isEqual(name1, name2));
             *                 alert(_o_.string.isEqual(name1, name2, true));
             **/
            isEqual: function (str1, str2, caseSensitive) {
                return _o_.compare.isNullOrEmpty(str1) || _o_.compare.isNullOrEmpty(str2) ? false : (function () {
                    return _o_.utility.ifNull(caseSensitive, false)
                        ? str1 == str2
                        : _o_.string.toLower(str1) == _o_.string.toLower(str2)
                })();
            },
            /**
             *  Desc    : Check the string is contains some word(s) or not.
             *  Params  : - {str1}          : (String) the string that will be
             *                                checked.
             *            - {search}        : (String) the string that will
             *                                be used as comparator.
             *            - {caseSensitive} : [optional](Boolean) Case sensitive
             *                                mode flag.
             *  Return  : Return TRUE value if the {str1} is contain {search}.
             *            Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            var srch = 'fadhly';
             *            alert(_o_.string.isContain(msg, srch));
             *            alert(_o_.string.isContain(msg, srch, true));
             **/
            isContain: function (str, search, caseSensitive) {
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    return _o_.utility.ifNull(caseSensitive, false)
                        ? str.search(search) != -1
                        : _o_.string.toLower(str).search(_o_.string.toLower(search)) != -1;
                })();
            },
            /**
             *  Desc    : Check the string is contains alpha only or not.
             *  Params  : - {str} : (String) the string that will be
             *                      checked.
             *  Return  : Return TRUE value if the {str} is only contain alpha.
             *            Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.isAlpha(msg));
             **/
            isAlpha: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^a-z\xDF-\xFF]|^$/.test(_o_.string.toLower(str));
            },
            /**
             *  Desc    : Check the string is contains alpha and numeric only
             *            or not.
             *  Params  : - {str} : (String) the string that will be checked.
             *  Return  : Return TRUE value if the {str} is only contain alpha and
             *            numeric. Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.isAlpha(msg));
             **/
            isAlphaNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^0-9a-z\xDF-\xFF]/.test(_o_.string.toLower(str));
            },
            /**
             *  Desc    : Check the string is contains numeric only or not.
             *  Params  : - {str} : (String) the string that will be checked.
             *  Return  : Return TRUE value if the {str} is only  numeric.
             *            Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.isNumeric(msg));
             **/
            isNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : !/[^0-9]/.test(str);
            },
            /**
             *  Desc    : Check the string is contains lower case only or not.
             *  Params  : - {str} : (String) the string that will be checked.
             *  Return  : Return TRUE value if the {str} is contains only lower
             *            case. Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.isLower(msg));
             **/
            isLower: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : str == _o_.string.toLower(str);
            },
            /**
             *  Desc    : Check the string is contains upper case only or not.
             *  Params  : - {str} : (String) the string that will be checked.
             *  Return  : Return TRUE value if the {str} is contains only upper
             *            case. Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.isUpper(msg));
             **/
            isUpper: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : str == _o_.string.toUpper(str);
            },
            /**
             *  Desc    : Check the string is starting with some chars (or words).
             *  Params  : - {str}    : (String) the string that will be checked.
             *          : - {search} : (String) the string that will be search.
             *  Return  : Return TRUE value if the {str} is contain {search} in the
             *            beginning. Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.isStartsWith(msg, 'Hello'));
             **/
            isStartsWith: function (str, search) {
                var args = arguments;
                return _o_.compare.isNullOrEmpty(str) || _o_.compare.isNullOrEmpty(search) ? false : (function () {
                    var suffixes = Array.prototype.slice.call(args, 0);
                    return _o_.string.left(suffixes[0], suffixes[1].length) == suffixes[1];
                })();
            },
            /**
             *  Desc    : Check the string is ending with some chars (or words).
             *  Params  : - {str}    : (String) the string that will be checked.
             *          : - {search} : (String) the string that will be search.
             *  Return  : Return TRUE value if the {str} is contain {search} in the
             *            end. Otherwise, FALSE.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.isEndsWith(msg, 'Hello'));
             **/
            isEndsWith: function (str, search) {
                var args = arguments;
                return _o_.compare.isNullOrEmpty(str) || _o_.compare.isNullOrEmpty(search) ? false : (function () {
                    var suffixes = Array.prototype.slice.call(args, 0);
                    return _o_.string.right(suffixes[0], suffixes[1].length) == suffixes[1];
                })();
            },

            // MODIFICATION
            /**
             *  Desc    : Get a char from specified index.
             *  Params  : - {str}   : (String) the string that will processed.
             *          : - {index} : (Int) the chars index (position).
             *  Return  : Returning a char from specified index.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.charAtIndex(msg, 7));
             **/
            charAtIndex: function (str, index) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.charAt(parseInt(_o_.utility.ifNull(index, 0)));
            },
            /**
             *  Desc    : Convert the string into Array of chars.
             *  Params  : - {str}   : (String) the string that will processed.
             *  Return  : Returning Array/Collection/List of chars from {str}.
             *  Sample  : var msg = 'Hello, my name is Fadhly Permata.';
             *            alert(_o_.string.chars(msg));
             **/
            chars: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.split('');
            },
            toCharsCode: function (str) {
                if (_o_.compare.isNullOrEmpty(str))
                    return null;
                else
                    return (function () {
                        str = _o_.string.chars(str);
                        var cCodes = [];

                        _o_.utility.each(str, function (key, value) {
                            cCodes.push(value.charCodeAt(0));
                        });

                        return cCodes;
                    })();
            },
            fromCharsCode: function (arrCharsCode) {
                if (_o_.compare.isNullOrEmpty(arrCharsCode))
                    return null;
                else
                    return (function () {
                        var str = '';

                        _o_.utility.each(arrCharsCode, function (key, value) {
                            str += String.fromCharCode(value);
                        });

                        return str;
                    })();
            },

            toLower: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.toLowerCase();
            },
            toUpper: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.toUpperCase();
            },
            capitalize: function (str, all) {
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    var b;
                    return _o_.string.toLower(str).replace(_o_.utility.ifNull(all, false) ? /[^']/g : /^\S/, function (word) {
                            var d = _o_.string.toUpper(word), e;
                            e = b ? word : d;
                            b = d !== word;
                            return e
                        }
                    );
                })();
            },

            left: function (str, count) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.substring(0, parseInt(_o_.utility.ifNull(count, 1)));
            },
            mid: function (str, left, right) {
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    return str.substring(parseInt(_o_.utility.ifNull(left, 1)), str.length - parseInt(_o_.utility.ifNull(right, 1)))
                })();
            },
            right: function (str, count) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.substring(str.length - _o_.utility.ifNull(count, 1));
            },

            collapseWhitespace: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
            },

            trim: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.replace(/(^\s*|\s*$)/g, '');
            },
            trimLeft: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.replace(/(^\s*)/g, '');
            },
            trimRight: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.replace(/\s+$/, '');
            },

            chomp: function (str, leftPrefix, rightPrefix) {
                if (_o_.compare.isNullOrEmpty(str)) {
                    return null;
                } else {
                    if (!_o_.compare.isNullOrEmpty(leftPrefix) || !_o_.compare.isNullOrEmpty(rightPrefix)) {
                        return _o_.string.chompRight(_o_.string.chompLeft(str, leftPrefix), rightPrefix);
                    } else {
                        return str;
                    }
                }
            },
            chompLeft: function (str, prefix) {
                return !_o_.compare.isNullOrEmpty(str)
                    ? !_o_.compare.isNullOrEmpty(prefix)
                    ? str.indexOf(prefix) === 0
                    ? str.slice(prefix.length)
                    : str
                    : str
                    : null;
            },
            chompRight: function (str, suffix) {
                return !_o_.compare.isNullOrEmpty(str)
                    ? !_o_.compare.isNullOrEmpty(suffix)
                    ? _o_.string.isEndsWith(str, suffix)
                    ? str.slice(0, str.length - suffix.length)
                    : str
                    : str
                    : null;
            },

            pad: function (str, len, char) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.length >= len ? str : (function () {
                    char = _o_.utility.ifNull(char, ' ');
                    len -= str.length;
                    return _o_.string.concat(
                        new Array(Math.ceil(len / 2) + 1).join(char),
                        str,
                        new Array(Math.floor(len / 2) + 1).join(char)
                    );
                })();
            },
            padLeft: function (str, len, char) {
                return _o_.compare.isNullOrEmpty(str) ? null : len <= str.length ? str : (function () {
                    return _o_.string.concat(new Array(len - str.length + 1).join(_o_.utility.ifNull(char, ' ')), str);
                })();
            },
            padRight: function (str, len, char) {
                return _o_.compare.isNullOrEmpty(str) ? null : str.length >= len ? str : (function () {
                    return _o_.string.concat(str, new Array(len - str.length + 1).join(_o_.utility.ifNull(char, ' ')));
                })();
            },

            between: function (str, left, right) {
                return _o_.compare.isNullOrEmpty(str) ? null : _o_.compare.isNullOrEmpty(left) || _o_.compare.isNullOrEmpty(right) ? str : (function () {
                    var begPos = str.indexOf(left);
                    var endPos = str.indexOf(right, begPos + left.length);
                    return !(-1 == endPos && null !== right)
                        ? -1 == endPos && null === right
                        ? str.substring(begPos + left.length)
                        : str.slice(begPos + left.length, endPos)
                        : '';
                })();
            },

            repeat: function (str, count, delimiter) {
                return _o_.compare.isNullOrEmpty(str)
                    ? null
                    : new Array(parseInt(_o_.utility.ifNull(count, 1) + 1)).join(_o_.string.format('{0}{1}', [str, _o_.utility.ifNull(delimiter, '')]));
            },
            times: function (str, count, delimiter) {
                return _o_.string.repeat(str, count, delimiter);
            },

            replace: function (str, oldChars, newChars) {
                return _o_.compare.isNullOrEmpty(str)
                    ? null
                    : _o_.compare.isNullOrEmpty(oldChars) || _o_.compare.isNullOrEmpty(newChars)
                    ? str
                    : str.replace(new RegExp(oldChars, 'g'), newChars);
            },

            concat: function (args) {
                var argue = arguments;
                return argue.length < 0x1 ? null : (function () {
                    var result = '';
                    _o_.utility.each(argue, function (key, value) {
                        result = _o_.string.format('{0}{1}', [result, value]);
                    });
                    return result;
                })();
            },

            format: function (str, argue) {
                return _o_.compare.isNullOrEmpty(arguments) ? null : _o_.compare.isNullOrEmpty(argue) ? str : (function () {
                    var formatPos = new RegExp('\{([0-' + (argue.length - 1) + '])\}', 'g');
                    return String(str).replace(formatPos, function (key, value) {
                        return value >= argue.length ? key : argue[value]
                    })
                })();
            },
            template: function (str, values, opening, closing) {
                return _o_.compare.isNullOrEmpty(str) ? null : _o_.compare.isNullOrEmpty(values) ? str : (function () {
                    opening = _o_.utility.ifNull(opening, '{{');
                    closing = _o_.utility.ifNull(closing, '}}');

                    var open = opening.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
                    var close = closing.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');

                    var r = new RegExp(_o_.string.concat(open, '(.+?)', close), 'g');
                    var matches = str.match(r) || [];

                    _o_.utility.each(matches, function (key, value) {
                        var sTpl = _o_.string.chomp(value, opening, closing);
                        var multiDim = sTpl.match(/(.)(\w+)/g);

                        var currentVal = values;
                        _o_.utility.each(multiDim, function (idx, ival) {
                            ival = _o_.string.chompLeft(ival, '.');
                            currentVal = currentVal[ival.toString()];
                        });

                        str = _o_.string.replace(str, _o_.string.concat(opening, sTpl, closing), currentVal);
                    });

                    return str;
                })();
            },

            // OBFUSCATION
            toHex: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    var sHex = '';

                    _o_.utility.each(_o_.string.chars(str), function (key, value) {
                        sHex += _o_.string.format('\\x{0}', [value.charCodeAt(0).toString(0x10).toUpperCase()]);
                    });

                    return sHex;
                })();
            },
            fromHex: function (str) {
                var args = arguments;
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    return str.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
                        return String.fromCharCode(parseInt(args[1], 16));
                    });
                })();
            },

            toUnicode: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    var sUnc = '';
                    _o_.utility.each(_o_.string.chars(str), function (key, value) {
                        sUnc += _o_.string.format('\\u00{0}', [value.charCodeAt(0).toString(0x10).toUpperCase()]);
                    });

                    return sUnc;
                })();
            },
            fromUnicode: function (str) {
                var args = arguments;
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    return str.replace(/\\u([0-9A-Fa-f]{2})/g, function () {
                        return String.fromCharCode(parseInt(args[1], 16));
                    });
                })();
            },

            reverse: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : _o_.string.chars(str).reverse().join('');
            },

            shift: function (str, shiftCounter) {
                return _o_.compare.isNullOrEmpty(str) ? null : (function () {
                    var cCode = _o_.string.toCharsCode(str);
                    _o_.utility.each(cCode, function (key, value) {
                        cCode[key] = value + shiftCounter;
                    });
                    return _o_.string.fromCharsCode(cCode);
                })();
            },

            // CONVERTER
            toJson: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? {} : _o_.json.parse(str);
            }
        },
        datetime: {
            // COMPARATOR
            isLeapYear: function (year) {
                return (0 === year % 4 && 0 !== year % 100) || 0 === year % 400;
            },

            // CORE
            now: function () {
                return +(new Date());
            },
            format: function (datetime, format) {
                datetime = new Date(_o_.utility.ifNull(datetime, _o_.datetime.now()));
                format = _o_.utility.ifNull(format, 'dddd, dd mmmm yyyy (hh:ii:ss)');

                var arrFormat = 'dddd,ddd,dd,mmmm,mmm,mm,yyyy,yy,hh,ii,ss'.split(',');
                var arrDt = [
                    _o_.settings.localization.datetime.dayName.long[datetime.getDay()],
                    _o_.settings.localization.datetime.dayName.short[datetime.getDay()],
                    _o_.number.zeroPad(datetime.getDate(), 2),
                    _o_.settings.localization.datetime.monthName.long[datetime.getMonth()],
                    _o_.settings.localization.datetime.monthName.short[datetime.getMonth()],
                    _o_.number.zeroPad(datetime.getMonth() + 1, 2),
                    datetime.getFullYear(),
                    _o_.string.right(datetime.getFullYear().toString(), 2),
                    _o_.number.zeroPad(datetime.getHours(), 2),
                    _o_.number.zeroPad(datetime.getMinutes(), 2),
                    _o_.number.zeroPad(datetime.getSeconds(), 2)
                ];

                _o_.utility.each(arrFormat, function (key, val) {
                    format = _o_.string.replace(format, val, arrDt[key]);
                });

                return format;
            },
            shift: function (datetime, type, counter) {
                return _o_.compare.isNullOrEmpty(datetime) || _o_.compare.isNullOrEmpty(type) || _o_.compare.isNullOrEmpty(counter) ? new Date(datetime) : (function () {
                    datetime = new Date(datetime);

                    switch (type) {
                        case 'years' || 'y':
                            datetime = new Date(datetime.setFullYear(datetime.getFullYear() + counter));
                            break;

                        case 'months' || 'M':
                            datetime = new Date(datetime.setFullYear(datetime.getFullYear(), datetime.getMonth() + counter));
                            break;

                        case 'days' || 'd':
                            datetime = new Date(datetime.setFullYear(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + counter));
                            break;

                        case 'hours' || 'h':
                            datetime = new Date(datetime.setHours(datetime.getHours() + counter));
                            break;

                        case 'minutes' || 'm':
                            datetime = new Date(datetime.setHours(datetime.getHours(), datetime.getMinutes() + counter));
                            break;

                        case 'seconds' || 's':
                            datetime = new Date(datetime.setHours(datetime.getHours(), datetime.getMinutes(), datetime.getSeconds() + counter));
                            break;

                        case 'milliseconds' || 'ms':
                            datetime = new Date(datetime.setHours(datetime.getHours(), datetime.getMinutes(), datetime.getSeconds(), datetime.getMilliseconds() + counter));
                            break;

                        default:
                            break;
                    }

                    return datetime;
                })();

            },

            year: function (datetime) {
                return _o_.datetime.toJson(datetime).year;
            },
            month: function (datetime) {
                return _o_.datetime.toJson(datetime).month;
            },
            date: function (datetime) {
                return _o_.datetime.toJson(datetime).date;
            },
            hour: function (datetime) {
                return _o_.datetime.toJson(datetime).hour;
            },
            minute: function (datetime) {
                return _o_.datetime.toJson(datetime).minute;
            },
            second: function (datetime) {
                return _o_.datetime.toJson(datetime).second;
            },
            milliSecond: function (datetime) {
                return _o_.datetime.toJson(datetime).milliSecond;
            },
            shortDayName: function (datetime) {
                return _o_.datetime.toJson(datetime).shortDayName;
            },
            longDayName: function (datetime) {
                return _o_.datetime.toJson(datetime).longDayName;
            },
            shortMonthName: function (datetime) {
                return _o_.datetime.toJson(datetime).shortMonthName;
            },
            longMonthName: function (datetime) {
                return _o_.datetime.toJson(datetime).longMonthName;
            },

            // CONVERTER
            convertFromDotnetDate: function (dotnetDate) {
                return _o_.compare.isNullOrEmpty(dotnetDate) ? null : new Date(parseInt(dotnetDate.substr(6)));
            },
            toJson: function (datetime) {
                datetime = new Date(_o_.utility.ifNull(datetime, _o_.datetime.now()));

                return {
                    year: datetime.getFullYear(),
                    longMonthName: _o_.settings.localization.datetime.monthName.long[datetime.getMonth()],
                    shortMonthName: _o_.settings.localization.datetime.monthName.short[datetime.getMonth()],
                    month: datetime.getMonth(),
                    longDayName: _o_.settings.localization.datetime.dayName.long[datetime.getDay()],
                    shortDayName: _o_.settings.localization.datetime.dayName.short[datetime.getDay()],
                    date: datetime.getDate(),
                    hour: datetime.getHours(),
                    minute: datetime.getMinutes(),
                    second: datetime.getSeconds(),
                    milliSecond: datetime.getMilliseconds()
                }
            }
        },
        number: {
            template: function () {
            },

            isOdd: function (numb) {
                return numb % 2 == 1;
            },
            isEven: function (numb) {
                return numb % 2 == 0;
            },

            isPrime: function (val) {
                for (var i = 2; i < val; i++) {
                    if (val % i === 0)
                        return false;
                }

                return val > 1;
            },
            getPrimes: function (min, max) {
                var primes = [];
                for (var i = min; i <= max; i++) {
                    if (_o_.number.isPrime(i))
                        primes.push(i)
                }

                return primes;
            },

            zeroPad: function (numb, lenOfNumber) {
                return _o_.compare.isNullOrEmpty(numb) ? null : (function () {
                    return _o_.compare.isNullOrEmpty(lenOfNumber)
                        ? numb
                        : _o_.string.padLeft(numb.toString(), lenOfNumber, '0');
                })();
            },

            random: function (nMin, nMax) {
                if (_o_.compare.isNullOrEmpty) {
                    max = min;
                    min = 0;
                }

                var min = Math.min(nMin || 0, _o_.compare.isNullOrEmpty(nMax) ? 1 : nMax);
                var max = Math.max(nMin || 0, _o_.compare.isNullOrEmpty(nMax) ? 1 : nMax) + 1;
                return Math.floor((Math.random() * (max - min)) + min);
            },

            log: function (nNum, base) {
                return Math.log(nNum) / (base ? Math.log(base) : 1);
            },

            // CONVERSION
            celciusToFahrenheit: function (val) {
                return (_o_.utility.ifNull(val, 0)) * 9.0 / 5.0 + 32.0
            },
            celciusToKelvin: function (val) {
                val = _o_.utility.ifNull(val, 0);
                return _o_.utility.ifNull(val, 0) + 273.15;
            },

            fahrenheitToCelcius: function (val) {
                return ((_o_.utility.ifNull(val, 0)) - 32.0) * 5.0 / 9.0;
            },
            fahrenheitToKelvin: function (val) {
                return ((_o_.utility.ifNull(val, 0)) + 459.67) * 5.0 / 9.0;
            },

            kelvinToCelcius: function (val) {
                return (_o_.utility.ifNull(val, 0)) - 273.15;
            },
            kelvinToFahrenheit: function (val) {
                return (_o_.utility.ifNull(val, 0)) * 9.0 / 5.0 - 459.67;
            },

            fromPercentage: function (nInitial, nPercent) {
                return _o_.compare.isNullOrEmpty(arguments)
                || _o_.compare.isNullOrEmpty(nInitial)
                || _o_.compare.isNullOrEmpty(nPercent)
                    ? 0
                    : (nInitial * nPercent) / 100;
            }
        },
        collections: {
            count: function (obj) {
                return _o_.compare.isNullOrEmpty(arguments) || !_o_.compare.isArray(obj) ? 0 : obj.length;
            },
            combine: function (obj1, obj2) {
                return _o_.compare.isNullOrEmpty(arguments) ? []
                    : _o_.compare.isNullOrEmpty(obj2) ? obj1 : obj1.concat(obj2);
            }
        },
        array: {
            count: function () {
                return _o_.collections.count;
            },
            combine: function (arr1, arr2) {
                return _o_.collections.combine(arr1, arr2);
            },

            shuffle: function (arr) {
                return _o_.compare.isNullOrEmpty(arr) ? [] : arr.sort(function () {
                    return 0.5 - Math.random();
                });
            },

            pushAtIndex: function (arr, newData, index) {
                return _o_.compare.isNullOrEmpty(arguments) ? [] : !_o_.compare.isArray(arr) || _o_.compare.isNullOrEmpty(newData) ? arr : (function () {
                    return !(index < 0 || index == _o_.array.count(arr))
                        ? arr.slice(0, index).concat(newData, arr.slice(index))
                        : arr.concat(newData);
                })();
            },
            pushAtFirst: function (arr, newData) {
                return _o_.compare.isNullOrEmpty(arguments) ? [] : _o_.compare.isNullOrEmpty(newData) ? arr : (function () {
                    arr.unshift(newData);
                    return arr;
                })();
            },
            pushAtLast: function (arr, newData) {
                return _o_.compare.isNullOrEmpty(arguments) ? [] : _o_.compare.isNullOrEmpty(newData) ? arr : (function () {
                    arr.push(newData);
                    return arr;
                })();
            },

            removeFirst: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments) ? [] : (function () {
                    count = _o_.compare.isNullOrEmpty(count) || _o_.compare.isNaN(count) ? 1 : count;
                    return arr.slice(count);
                })();
            },
            removeLast: function (arr, count) {
                return _o_.compare.isNullOrEmpty(argument) ? [] : (function () {
                    count = _o_.compare.isNullOrEmpty(count) || _o_.compare.isNaN(count) ? 1 : (arr.length <= count ? arr.length - 2 : count);
                    return arr.slice(0, arr.length - (count + 1));
                })();
            },

            takeFirst: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments) ? [] : (function () {
                    count = _o_.compare.isNullOrEmpty(count) || _o_.compare.isNaN(count) ? 1 : arr.length - count - 1;
                    return _o_.array.removeLast(arr, count);
                })();
            },
            takeLast: function (arr, count) {
                return _o_.compare.isNullOrEmpty(argument) ? [] : (function () {
                    count = _o_.compare.isNullOrEmpty(count) || _o_.compare.isNaN(count) ? 1 : arr.length - count;
                    return _o_.array.removeFirst(arr, count);
                })();
            },
            takeRandom: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments) ? [] : (function () {
                    count = _o_.compare.isNullOrEmpty(count) || _o_.compare.isNaN(count) ? 1 : count;
                    return _o_.array.takeFirst(_o_.array.shuffle(arr), count);
                })();
            },

            toString: function (arr, openBracket, closeBracket) {
                return _o_.compare.isNullOrEmpty(arr) ? '' : (function () {
                    openBracket = !_o_.compare.isNullOrEmpty(openBracket) ? openBracket : '[';
                    closeBracket = !_o_.compare.isNullOrEmpty(closeBracket) ? closeBracket : ']';

                    function arrToString(arr) {
                        var res = openBracket;

                        _o_.utility.each(arr, function (key, value) {
                            res += _o_.compare.isArray(value) ? arrToString(value) : value;
                        });

                        return res += closeBracket;
                    }

                    return arrToString(arr);
                })();
            }
        }
    };

    if (_o_.settings.writeCopyleftMessageToConsole) _o_.copyleftToConsole();
    window.octapushJS = window.octapush = window.octa = window._o_ = _o_;
})();

/*
 TODO :
 ======
 Number:
 + IsOdd
 + IsEven
 + IsPrimeNumber
 + GetPrimeNumbers
 - GetPercentage
 + fromPercentage


 Collection:
 - removeSome
 - removeAt
 - takeAt
 - takeSome
 */