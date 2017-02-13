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
                localizationName: 'Azerbaijani',
                translator: 'Fadhly Permata',
                days: {
                    min: ['Bz', 'BE', 'ÇA', 'Çə', 'CA', 'Cü', 'Şə'],
                    short: ['Baz', 'BzE', 'ÇAx', 'Çər', 'CAx', 'Cüm', 'Şən'],
                    long: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə']
                },
                months: {
                    short: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avq', 'sen', 'okt', 'noy', 'dek'],
                    long: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr']
                }
            }
        });

        window.octapushJS = window._o_ = _o_;
    }
})();