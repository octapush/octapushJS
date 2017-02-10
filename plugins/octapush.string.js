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

        var version = '1.7.02.10';
        _o_.string = {
            version: version,

            // case changer
            toLower: function (str) {
                return str.toLowerCase();
            },
            toUpper: function (str) {
                return str.toUpperCase();
            },
            capitalize: function (str, all) {
                var b;
                return _o_.string.toLower(str).replace(_o_.utility.ifNull(all, false) ? /[^']/g : /^\S/, function (word) {
                    var d = _o_.string.toUpper(word);
                    var e = b ? word : d;
                    b = d !== word;
                    return e;
                });
            },

            // comparer
            isEqual: function (str1, str2, caseSensitive) {
                return _o_.utility.ifNull(caseSensitive, true) ?
                    str1 === str :
                    _o_.string.toLower(str1) === _o_.string.toLower(str2);
            },
            isContain: function (str, search, caseSensitive) {
                return _o_.utility.ifNull(caseSensitive, false) ?
                    str.search(search) != -1 :
                    _o_.string.toLower(str).search(_o_.string.toLower(search)) != -1;
            },
            isStartsWith: function (str, search) {
                var suffixes = Array.prototype.slice.call(arguments, 0);
                return _o_.string.left(suffixes[0], suffixes[1].length) == suffixes[1]
            },
            isEndsWith: function () {
                var suffixes = Array.prototype.slice.call(arguments, 0);
                return _o_.string.right(suffixes[0], suffixes[1].length) == suffixes[1];
            },
            isAlpha: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^a-z\xDF-\xFF]|^$/.test(_o_.string.toLower(str));
            },
            isNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : !/[^0-9]/.test(str);
            },
            isAlphaNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^0-9a-z\xDF-\xFF]/.test(_o_.string.toLower(str));
            },
            isLower: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? true : str === _o_.string.toLower(str);
            },
            isUpper: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? true : str === _o_.string.toUpper(str);
            },

            // chopper
            charAtIndex: function (str, index) {
                return _o_.compare.isNullOrEmpty(str) ? '' : str.charAt(parseInt(_o_.utility.ifNull(index, 0)));
            },

            toCharsArray: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? new Array() : str.split('');
            },

            toCharsCode: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    new Array() :
                    (function () {
                        return _o_.string.toCharsArray(str).map(function (char) {
                            return char.charCodeAt(0);
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
                    str.substring(0, parseInt(_o_.utility.ifNull(count, 1)));
            },
            mid: function (str, leftPos, rightPos) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.substring(parseInt(_o_.utility.ifNull(leftPos, 1)), str.length - parseInt(_o_.utility.ifNull(rightPos, 1)));
            },
            right: function (str, count) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.substring(str.length - _o_.utility.ifNull(count, 1));
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

            // modification
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
                            var formatPos = new RegExp('\{([0-' + (argue.length - 1) + '])\}', 'g');
                            return String(str).replace(formatPos, function (key, value) {
                                return value >= argue.length ? key : argue[value]
                            })
                        })()
                    );
            },

            // TODO: UNFINISH
            template: function (str, values, opening, closing) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    _o_.compare.isNullOrEmpty(values) ? str : (function () {
                        opening = _o_.ifNull(opening, '{{');
                        closing = _o_.ifNull(closing, '}}');

                        var open = opening.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
                        var close = closing.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
                    })();
            }
        };

        window.octapushJS = window._o_ = _o_;
    }
})();