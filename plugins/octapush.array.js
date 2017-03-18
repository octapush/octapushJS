/*
 === octapushJS.array ===
 Author  : Fadhly Permata
 eMail   : fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer : Fadhly Permata

 === Contributors ===
 ... just type your name here after editing the script ...
 */
(function (w) {
    'use strict';

    if (!w._o_) {
        console.log('octapushJS.array has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.03.11';

        _o_.array = _o_.utility.extend(_o_.utility.ifNull(_o_.array, {}), {
            version: version,
            count: function (arr) {
                return !_o_.compare.isArray(arr)
                    ? 0
                    : arr.length;
            },
            combine: function (arr1, arr2) {
                return !_o_.compare.isArray(arr2)
                    ? arr1
                    : (
                        !_o_.compare.isArray(arr1)
                            ? arr2
                            : arr1.concat(arr2)
                    )
            },
            shuffle: function (arr) {
                return _o_.compare.isNullOrEmpty(arr)
                    ? []
                    : arr.sort(function () {
                        return 0.5 - Math.random();
                    });
            },
            pushAtIndex: function (arr, newData, idx) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (
                        !_o_.compare.isArray(arr) || _o_.compare.isNullOrEmpty(newData)
                            ? arr
                            : (function () {
                                return !(idx < 0 || idx == _o_.array.count(arr))
                                    ? arr.slice(0, idx).concat(newData, arr.slice(idx))
                                    : arr.concat(newData);
                            })()
                    )
            },
            PushAtFirst: function (arr, newData) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (
                        !_o_.compare.isArray(arr) || _o_.compare.isNullOrEmpty(newData)
                            ? arr
                            : (function () {
                                arr.unshift(newData);
                                return arr;
                            })()
                    );
            },
            pushAtLast: function (arr, newData) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (
                        !_o_.compare.isArray(arr) || _o_.compare.isNullOrEmpty(newData)
                            ? arr
                            : (function () {
                                arr.push(newData);
                                return arr;
                            })()
                    );
            },
            removeFirst: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (function () {
                        count = _o_.compare.isNaN(count) ? 0 : count;
                        return arr.slice(count);
                    })();
            },
            removeLast: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (function () {
                        count = _o_.compare.isNaN(count) ? 0 : count;
                        return arr.slice(0, _o_.array.count(arr) - (count + 1));
                    })();
            },
            removeAt: function (arr, startPos, endPos) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (
                        _o_.array.count(arr) < 1 || _o_.compare.isNaN(startPos) || startPos < 0 || _o_.compare.isNaN(endPos) || endPos > _o_.array.count(arr)
                            ? arr
                            : (function () {
                                return arr.slice(startPos, endPos);
                            })()
                    );
            },
            takeFirst: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (function () {
                        count = _o_.utility.ifNull(count, 1);
                        return _o_.array.removeLast(arr, _o_.array.count(arr) - count - 1);
                    })();
            },
            takeLast: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (function () {
                        count = _o_.utility.ifNull(count, 1);
                        return _o_.array.removeFirst(arr, _o_.array.count(arr) - count);
                    })();
            },
            takeRandom: function (arr, count) {
                return _o_.compare.isNullOrEmpty(arguments)
                    ? []
                    : (function () {
                        count = _o_.utility.ifNull(count, 1);
                        count = count > _o_.array.count(arr) ? _o_.array.count(arr) : count;
                        return _o_.array.takeFirst(_o_.array.shuffle(arr), count);
                    })();
            }
        });
    }
})(window);