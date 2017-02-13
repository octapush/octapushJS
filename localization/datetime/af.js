/*
 === octapushJS.localization.datetime ===
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
        alert('octapushJS.localization.datetime has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        var _o_ = window._o_;
        var version = '1.7.02.13';

        _o_.localization.datetime = Object.assign(_o_.utility.ifNull(_o_.localization.datetime, {}), {
            'IDN': {
                localizationName: 'Afrikaans',
                translator: 'Fadhly Permata',
                days: {
                    min: ['So', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Sa'],
                    short: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
                    long: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag']
                },
                months: {
                    short: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
                    long: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember']
                }
            }
        });

        window.octapushJS = window._o_ = _o_;
    }
})();