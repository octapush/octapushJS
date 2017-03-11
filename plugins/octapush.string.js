/*
 === octapushJS.string ===
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
 * - ADD ParseCSV
 * - ADD decodeHtmlEntities
 * - ADD escapeHTML
 * + ADD ensureLeft(prefix)
 * + ADD ensureRight(suffix)
 * + ADD humanize()
 * - ADD stripTags([tag1],[tag2],...)
 * - ADD toBoolean() / toBool()
 * - ADD toCSV(options)
 * - ADD toFloat([precision])
 * - ADD toInt() / toInteger()
 * - ADD truncate(length, [chars])
 * + ADD underscore()
 * - ADD unescapeHTML()
 * - ADD wrapHTML()
 */

(function (w) {
    'use strict';
    if (!w._o_) {
        console.log('octapushJS.string has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.15';

        _o_.string = _o_.utility.extend(_o_.utility.ifNull(_o_.string, {}), {
            /**
             *  Returning octapushJS.string version.
             */
            version: version,

            toLower: function (str) {
                return str.toLowerCase();
            },

            toUpper: function (str) {
                return str.toUpperCase();
            },

            capitalize: function (str, all) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            (function () {
                                var b;
                                return _o_.string.replace(
                                    _o_.string.toLower(str),
                                    _o_.utility.ifNull(all, false) ? /[^']/g : /^\S/,
                                    function (chr) {
                                        var d = _o_.string.toUpper(chr);
                                        var e = b ? chr : d;
                                        b = d !== chr;
                                        return e;
                                    }
                                );
                            })()
                    );
            },

            sentenceCapitalize: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            (function () {
                                return _o_.string.concat(
                                    _o_.string.toUpper(_o_.string.left(str, 1)),
                                    _o_.string.removeLeft(_o_.string.replace(
                                        _o_.string.toLower(_o_.string.trim(str)),
                                        /((!|\?|\.)+( [a-zA-Z]))|((\n)+([a-zA-Z]))/g,
                                        function (chars) {
                                            return _o_.string.concat(
                                                _o_.string.removeRight(chars, 0x1),
                                                _o_.string.toUpper(_o_.string.right(chars, 0x1))
                                            );
                                        }
                                    ), 0x1)
                                );
                            })()
                    );
            },

            camelize: function (str) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            _o_.string.trim(str).replace(/(\-|_|\s)+(.)?/g, function (match, sep, c) {
                                return c ? _o_.string.toUpper(c) : ''
                            })
                    );
            },

            dasherize: function (str) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            _o_.string.replaces(_o_.string.trim(str), [/[_\s]+/, /([A-Z])/, /-+/g], ['-', '-$1', '-']).toLowerCase()
                    );
            },

            isEqual: function (str1, str2, caseSensitive) {
                return _o_.utility.ifNull(caseSensitive, true) ?
                    str1 === str :
                    _o_.string.toLower(str1) === _o_.string.toLower(str2)
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
                return _o_.compare.isNullOrEmpty(str) ?
                    false :
                    !/[^a-z\xDF-\xFF]|^$/.test(_o_.string.toLower(str));
            },

            isNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    false :
                    !/[^0-9]/.test(str);
            },

            isAlphaNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    false :
                    !/[^0-9a-z\xDF-\xFF]/.test(_o_.string.toLower(str));
            },

            isLower: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    false :
                    str === _o_.string.toLower(str);
            },

            isUpper: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    false :
                    str === _o_.string.toUpper(str);
            },

            charAtIndex: function (str, index) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    str.charAt(parseInt(_o_.utility.ifNull(index, 0x0)));
            },

            toCharsArray: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    new Array() :
                    str.split('');
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

            length: function (str) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    0x0 :
                    str.length;
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

            removeLeft: function (str, removeCount) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            _o_.string.right(str, str.length - removeCount)
                    );
            },

            removeRight: function (str, removeCount) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            _o_.string.left(str, str.length - removeCount)
                    );
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

            collapseWhitespace: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    _o_.string.replaces(str, [/[\s\xa0]+/, /^\s+|\s+$/], [' ', ''])
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

            ensureLeft: function (str, prefix) {
                return str.indexOf(prefix) === 0 ? str : _o_.string.concat(prefix, str);
            },

            ensureRight: function (str, suffix) {
                return _o_.string.isEndsWith(str, suffix) ? str : _o_.string.concat(str, suffix);
            },

            chompLeft: function (str, prefix) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        _o_.compare.isNullOrEmpty(prefix) ?
                            str :
                            (
                                str.indexOf(prefix) === 0x0 ?
                                    str.slice(prefix.length) :
                                    str
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
                                !_o_.string.isEndsWith(str, suffix) ?
                                    str :
                                    str.slice(0x0, str.length - suffix.length)
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
                                    (
                                        -0x1 == endPos && _o_.compare.isNullOrEmpty(right) ?
                                            str.substring(begPos + left.length) :
                                            str.slice(begPos + left.length, endPos)
                                    ) :
                                    '';
                            })()
                    );
            },

            repeat: function (str, count, separator) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        return new Array(_o_.utility.ifNull(count, 0x1) + 0x2)
                            .join(_o_.string.concat(str, _o_.utility.ifNull(separator, ' ')));
                    })()
            },

            times: function (str, count, separator) {
                return _o_.string.repeat(str, count, separator);
            },

            replace: function (str, search, reeplace, all) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        !_o_.compare.isString(str) || _o_.compare.isNullOrEmpty(search) || _o_.compare.isNullOrEmpty(reeplace) ?
                            str :
                            (function () {
                                all = _o_.utility.ifNull(all, true);
                                return str.replace(new RegExp(search, all ? 'g' : ''), reeplace);
                            })()
                    )
            },

            replaces: function (str, arrSearch, arrReplace, all) {
                return _o_.compare.isNullOrEmpty(arguments) ?
                    '' :
                    (
                        !_o_.compare.isString(str) || !_o_.compare.isArray(arrSearch) || !_o_.compare.isArray(arrReplace) || _o_.compare.isNullOrEmpty(arrSearch) || _o_.compare.isNullOrEmpty(arrReplace) || arrSearch.length !== arrReplace.length ?
                            str :
                            (function () {
                                all = _o_.utility.ifNull(all, true);
                                _o_.utility.each(arrSearch, function(key, val) {
                                    str = _o_.string.replace(str, val, arrReplace[key]);
                                })

                                return str;
                            })()
                    );
            },

            lines: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            _o_.string.replace(str, '(\r\n)|(\n\n)', '\n').split('\n')
                    );
            },

            strip: function (str, strips) {
                var argues = arguments;
                return _o_.compare.isNullOrEmpty(argues) ?
                    '' :
                    (
                        !_o_.compare.isString(str) || argues.length < 2 ?
                            str :
                            (function () {
                                _o_.utility.loop(argues.length, function (i) {
                                    if (i !== 0)
                                        str = str.split(argues[i]).join('');
                                });

                                return str;
                            })()
                    );
            },

            stripPunctuation: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            _o_.string.replaces(str, [/[^\w\s]|_/, /\s+/], ['', ' '])
                    )
            },

            underscore: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            (function () {
                                var s = _o_.string.toLower(_o_.string.replaces(_o_.string.trim(str), [/([a-z\d])([A-Z]+)/, /[-\s]+/], ['$1_$2', '_']));
                                return _o_.string.isLower(_o_.string.left(str))  ?
                                    s :
                                    '_' + s;
                            })()
                    );
            },

            humanize: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        !_o_.compare.isString(str) ?
                            str :
                            _o_.string.capitalize(_o_.string.trim(_o_.string.replaces(_o_.string.underscore(str), [/_id$/, /_/], ['', ' '])), false)
                    );
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
                            return _o_.string.replace(
                                str,
                                '\{([0-' + (argue.length - 0x1) + '])\}',
                                function (key, value) {
                                    return value >= argue.length ? key : argue[value]
                                }
                            );
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

                                var open = _o_.string.replaces(opening, [/[-[\]()*\s]/, /\$/], ['\\$&', '\\$']);
                                var close = _o_.string.replaces(closing, [/[-[\]()*\s]/, /\$/], ['\\$&', '\\$']);

                                for (var el in values) {
                                    str = _o_.string.replace(
                                        str,
                                        _o_.string.concat(open, el, close),
                                        values[el],
                                        true
                                    );
                                }

                                return str;
                            })()
                    );
            },

            // encode & decode
            toHex: function (str) {
                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (function () {
                        var sHex = '';

                        _o_.utility.each(_o_.string.toCharsArray(str), function (chr) {
                            sHex += _o_.string.concat(
                                '\\x',
                                chr.charCodeAt(0x0).toString(0x10).toUpperCase()
                            );
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

                        _o_.utility.each(_o_.string.toCharsArray(str), function (element) {
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

                        _o_.utility.each(cCode, function (value, key) {
                            cCode[key] = value + shiftCounter;
                        });

                        return _o_.string.fromCharsCode(cCode);
                    })();
            }
        });
    }
})(window);