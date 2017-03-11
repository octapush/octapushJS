/*
 === octapushJS.number ===
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
        console.log('octapushJS.number has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.13';

        _o_.number = _o_.utility.extend(_o_.utility.ifNull(_o_.number, {}), {
            version: version,
            isOdd: function (num) {
                return num % 2 === 1;
            },
            isEven: function (num) {
                return num % 2 === 0;
            },
            isPrime: function (num) {
                for (var i = 2; i < num; i++)
                    if (num % i === 0)
                        return false;

                return num > 1;
            },
            getPrimes: function (min, max) {
                var primes = [];
                for (var i = min; i <= max; i++)
                    if (_o_.number.isPrime(i))
                        primes.push(i);

                return primes;
            },
            zeroPad: function (numb, lenOfNumber) {
                return _o_.compare.isNullOrEmpty(numb) ?
                    0 :
                    (function () {
                        return _o_.compare.isNullOrEmpty(lenOfNumber) ?
                            numb :
                            _o_.string.padLeft(numb.toString(), lenOfNumber, '0');
                    })();
            },
            random: function (nMin, nMax) {
                max = _o_.utility.ifNull(max, min);
                min = 0;

                var min = Math.min(nMin || 0, _o_.utility.ifNull(nMax, 1));
                var max = Math.max(nMin || 0, _o_.utility.ifNull(nMax, 1) + 1);

                return Math.floor((Math.random() * (max - min)) + min);
            },
            log: function (num, base) {
                return Math.log(num) / (base ? Math.log(base) : 1);
            },
            celciusToFahrenheit: function (val) {
                return _o_.utility.ifNull(val, 0) * 9.0 / 5.0 + 32.0;
            },
            celciusToKelvin: function (val) {
                return _o_.utility.ifNull(val, 0) + 273.15;
            },
            fahrenheitToCelcius: function (val) {
                return (_o_.utility.ifNull(val, 0) - 32.0) * 5.0 / 9.0;
            },
            fahrenheitToKelvin: function (val) {
                return (_o_.utility.ifNull(val, 0) + 459.67) * 5.0 / 9.0;
            },
            kelvinToCelcius: function (val) {
                return _o_.utility.ifNull(val, 0) - 273.15;
            },
            kelvinToFahrenheit: function (val) {
                return _o_.utility.ifNull(val, 0) * 9.0 / 5.0 - 459.67;
            },
            fromPercentage: function (nInitial, nPercent) {
                return _o_.compare.isNullOrEmpty(arguments) || _o_.compare.isNullOrEmpty(nInitial) || _o_.compare.isNullOrEmpty(nPercent) ?
                    0 :
                    (nInitial * nPercent) / 100;
            }
        });
    }
})(window);