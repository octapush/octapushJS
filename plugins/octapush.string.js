/*
 === octapushJS.string ===
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
    if (!window.octapushJS || !window._o_) {
        alert('octapushJS.string has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        var _o_ = window._o_;
        var version = '1.7.02.11';

        _o_.string = {
            /**
             *  Returning octapushJS.string version.
             */
            version: version,
            /**
             * @description Convert the `str` case into lowercase
             * @param {string} `str` the string to be converted
             * @returns {string} Lowered case string.
             */
            toLower: function (str) {
                return str.toLowerCase();
            },
            /**
             * @description Convert the `str` case into uppercase
             * @param {string} `str` the string to be converted
             * @returns {string} Uppered case string.
             */
            toUpper: function (str) {
                return str.toUpperCase();
            },
            /**
             * @description Convert the `str` case into capitalize
             * @param {string} `str` the string to be converted
             * @param {bool} `all` the flag for capitalize all words. The default value is FALSE
             * @returns {string} Capitalized string.
             */
            capitalize: function (str, all) {
                var b;
                return _o_.string.toLower(str).replace(_o_.utility.ifNull(all, false) ? /[^']/g : /^\S/, function (word) {
                    var d = _o_.string.toUpper(word);
                    var e = b ? word : d;
                    b = d !== word;
                    return e;
                });
            },
            /**
             * @description Compare two string
             * @param {string} `str1` the string to be checked
             * @param {string} `str2` the string to be checked
             * @param {bool} `caseSensitive` compare with caseSensitive options [default is TRUE]
             * @returns {string} return TRUE if `str1` is equal with `str2`. Otherwise, returning FALSE.
             */
            isEqual: function (str1, str2, caseSensitive) {
                return _o_.utility.ifNull(caseSensitive, true) ?
                    str1 === str :
                    _o_.string.toLower(str1) === _o_.string.toLower(str2);
            },
            isContain: function (str, search, caseSensitive) {
                return _o_.utility.ifNull(caseSensitive, false) ?
                    str.search(search) != -0x1 :
                    _o_.string.toLower(str).search(_o_.string.toLower(search)) != -0x1;
            },
            isStartsWith: function (str, search) {
                var suffixes = Array.prototype.slice.call(arguments, 0x0);
                return _o_.string.left(suffixes[0x0], suffixes[0x1].length) == suffixes[0x1]
            },
            isEndsWith: function () {
                var suffixes = Array.prototype.slice.call(arguments, 0x0);
                return _o_.string.right(suffixes[0x0], suffixes[0x1].length) == suffixes[0x1];
            },
            isAlpha: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^a-z\xDF-\xFF]|^$/.test(_o_.string.toLower(str));
            },
            isNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^0-9]/.test(str);
            },
            isAlphaNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^0-9a-z\xDF-\xFF]/.test(_o_.string.toLower(str));
            },
            isLower: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : str === _o_.string.toLower(str);
            },
            isUpper: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : str === _o_.string.toUpper(str);
            },

            // chopper
            charAtIndex: function (str, index) {
                return _o_.compare.isNullOrEmpty(str) ? '' : str.charAt(parseInt(_o_.utility.ifNull(index, 0x0)));
            },

            toCharsArray: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? new Array() : str.split('');
            },

            toCharsCode: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    new Array() :
                    (function () {
                        return _o_.string.toCharsArray(str).map(function (char) {
                            return char.charCodeAt(0x0);
                        });
                    })();
            },

            fromCharsCode: function (arrCharsCode) {
                return _o_.compare.isNullOrEmpty(arrCharsCode) ?
                    '' :
                    (function () {
                        return arrCharsCode.map(function (charCode) {
                            return String.fromCharCode(charCode);
                        }).join('');
                    })();
            },

            left: function (str, count) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.substring(0x0, parseInt(_o_.utility.ifNull(count, 0x1)));
            },
            mid: function (str, leftPos, rightPos) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.substring(parseInt(_o_.utility.ifNull(leftPos, 0x1)), str.length - parseInt(_o_.utility.ifNull(rightPos, 0x1)));
            },
            right: function (str, count) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.substring(str.length - _o_.utility.ifNull(count, 0x1));
            },

            // trim
            collapseWhitespace: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
            },

            trim: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.replace(/(^\s*|\s*$)/g, '');
            },
            trimLeft: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.replace(/(^\s*)/g, '');
            },
            trimRight: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.replace(/\s+$/, '');
            },

            chomp: function (str, prefix, suffix) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        _o_.compare.isNullOrEmpty(prefix) && _o_.compare.isNullOrEmpty(suffix) ?
                            str :
                            _o_.string.chompRight(_o_.string.chompLeft(str, prefix), suffix)
                    )
            },
            chompLeft: function (str, prefix) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        _o_.compare.isNullOrEmpty(prefix) ?
                            str :
                            (
                                str.indexOf(prefix) === 0x0 ? str.slice(prefix.length) : str
                            )
                    );
            },
            chompRight: function (str, suffix) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        _o_.compare.isNullOrEmpty(suffix) ?
                            str :
                            (
                                !_o_.string.isEndsWith(str, suffix) ? str : str.slice(0x0, str.length - suffix.length)
                            )
                    );
            },

            pad: function (str, len, char) {
                len = _o_.utility.ifNull(len, 0x1);
                char = _o_.utility.ifNull(char, ' ');

                return len <= str.length ?
                    str :
                    _o_.string.concat(
                        new Array(Math.ceil((len - str.length) / 0x2) + 0x1).join(char),
                        str,
                        new Array(Math.floor((len - str.length) / 0x2) + 0x1).join(char)
                    );
            },
            padLeft: function (str, len, char) {
                len = _o_.utility.ifNull(len, 0x1);
                char = _o_.utility.ifNull(char, ' ');

                return len <= str.length ?
                    str :
                    _o_.string.concat(
                        new Array(len - str.length + 0x1).join(char),
                        str
                    )
            },
            padRight: function (str, len, char) {
                len = _o_.utility.ifNull(len, 0x1);
                char = _o_.utility.ifNull(char, ' ');

                return len <= str.length ?
                    str :
                    _o_.string.concat(
                        str,
                        new Array(len - str.length + 0x1).join(char)
                    );
            },

            between: function (str, left, right) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        _o_.compare.isNullOrEmpty(left) || _o_.compare.isNullOrEmpty(right) ?
                            str :
                            (function () {
                                var begPos = str.indexOf(left);
                                var endPos = str.indexOf(right, begPos + left.length);

                                return !(-0x1 == endPos && !_o_.compare.isNullOrEmpty(right)) ?
                                    -0x1 == endPos && _o_.compare.isNullOrEmpty(right) ?
                                        str.substring(begPos + left.length) :
                                        str.slice(begPos + left.length, endPos) :
                                    '';
                            })()
                    );
            },

            repeat: function (str, count, separator) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        count = _o_.utility.ifNull(count, 0x1);
                        separator = _o_.utility.ifNull(separator, ' ');

                        return new Array(count + 0x2).join(_o_.string.concat(str, separator));
                    })()
            },
            times: function (str, count, separator) {
                return _o_.string.repeat(str, count, separator);
            },

            replace: function (str, search, replace) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        _o_.compare.isNullOrEmpty(search) || _o_.compare.isNullOrEmpty(replace) ?
                            str :
                            str.replace(new RegExp(search, 'g'), replace)
                    )
            },

            concat: function (stringsArgs) {
                var argues = arguments;
                return _o_.compare.isNullOrEmpty(argues) ?
                    '' :
                    (function () {
                        var aStr = [];

                        for (var element in argues)
                            aStr.push(argues[element]);

                        return aStr.join('');
                    })();
            },
            format: function (str, argue) {
                argue = arguments;
                return _o_.compare.isNullOrEmpty(arguments) ?
                    null :
                    (_o_.compare.isNullOrEmpty(argue) ?
                        str :
                        (function () {
                            var formatPos = new RegExp('\{([0-' + (argue.length - 0x1) + '])\}', 'g');
                            return String(str).replace(formatPos, function (key, value) {
                                return value >= argue.length ? key : argue[value]
                            })
                        })()
                    );
            },

            template: function (str, values, opening, closing) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        _o_.compare.isNullOrEmpty(values) ?
                            str :
                            (function () {
                                opening = _o_.utility.ifNull(opening, '{{');
                                closing = _o_.utility.ifNull(closing, '}}');

                                var open = opening.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
                                var close = closing.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');

                                var r = new RegExp(_o_.string.concat(open, '(.+?)', close), 'g');
                                var matches = str.match(r) || [];

                                matches.forEach(function (element) {
                                    var sTpl = _o_.string.chomp(element, opening, closing);
                                    var multiDim = sTpl.match(/(.)(\w+)/g);

                                    var currentVal = values;
                                    multiDim.forEach(function (el) {
                                        el = _o_.string.chompLeft(el, '.');
                                        currentVal = currentVal[el.toString()];
                                    });

                                    str = _o_.string.replace(str, _o_.string.concat(opening, sTpl, closing), currentVal);
                                });

                                return str;
                            })()
                    );
            },

            // encoder
            toHex: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        var sHex = '';

                        _o_.string.toCharsArray(str).forEach(function (element) {
                            sHex += _o_.string.concat('\\x', element.charCodeAt(0x0).toString(0x10).toUpperCase());
                        });

                        return sHex;
                    })();
            },
            fromHex: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        return str.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
                            return String.fromCharCode(parseInt(args[0x1], 0x10));
                        })
                    })();
            },

            toUnicode: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        var sUnc = '';

                        _o_.string.toCharsArray(str).forEach(function (element) {
                            sUnc += _o_.string.concat('\\u00', element.charCodeAt(0x0).toString(0x10).toUpperCase());
                        });

                        return sUnc;
                    })();
            },
            fromUnicode: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        return str.replace(/\\u([0-9A-Fa-f]{2})/g, function () {
                            return String.fromCharCode(parseInt(args[0x1], 0x10));
                        });
                    })();
            },

            reverse: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    _o_.string.toCharsArray(str).reverse().join('');
            },

            shift: function (str, shiftCounter) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        var cCode = _o_.string.toCharsCode(str);

                        cCode.forEach(function (value, key) {
                            cCode[key] = value + shiftCounter;
                        });

                        return _o_.string.fromCharsCode(cCode);
                    })();
            }
        };

        window.octapushJS = window._o_ = _o_;
    }
})();