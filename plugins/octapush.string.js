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
        alert('octapushJS.string is plugin for octapushJS. Please add "octapush.js" file first.');
        return;

    } else {
        var _o_ = window._o_;

        var version = '1.7.02.10';
        _o_.string = {
            version: version,

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

            isEqual: function (str1, str2, caseSensitive) {
                return _o_.utility.ifNull(caseSensitive, true) ?
                    str1 === str :
                    _o_.string.toLower(str1) === _o_.string.toLower(str2);
            },
            isContain: function(str, search, caseSensitive) {
                return _o_.utility.ifNull(caseSensitive, false) 
                    ? str.search(search) != -1
                    : _o_.string.toLower(str).search(_o_.string.toLower(search)) != -1;
            },

            isAlpha: function(str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^a-z\xDF-\xFF]|^$/.test(_o_.string.toLower(str));
            },
            isNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? null : !/[^0-9]/.test(str);
            },
            isAlphaNumeric: function (str) {
                return _o_.compare.isNullOrEmpty(str) ? false : !/[^0-9a-z\xDF-\xFF]/.test(_o_.string.toLower(str));
            }
        };

        window.octapushJS = window._o_ = _o_;
    }
})();