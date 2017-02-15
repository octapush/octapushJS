/*
 === octapushJS.localization.datetime ===
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
    if (!w.octapushJS || !w._o_) {
        alert('octapushJS.localization.datetime has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
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
    }
})(window);