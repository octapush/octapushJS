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
    if (!w._o_) {
        console.log('octapushJS.localization.datetime has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        _o_.localization.datetime = _o_.utility.extend(_o_.utility.ifNull(_o_.localization.datetime, {}), {
            'IDN': {
                localizationName: 'Indonesia',
                translator: 'Fadhly Permata',
                days: {
                    short: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                    long: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
                },
                months: {
                    short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                    long: ['Januari', 'Februari', 'Maret', 'April', 'May', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
                }
            }
        });
    }
})(window);