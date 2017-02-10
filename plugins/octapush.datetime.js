/*
 === octapushJS.datetime ===
 Author  : Fadhly Permata
 eMail   : - fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer : Fadhly Permata

 === Contributors ===
 ... just type your name here after editing the script ...
 */
(function() {
    'use strict';
     if (!window.octapushJS || !window._o_) {
        alert('octapushJS.datetime has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        var _o_ = window._o_;
        var version = '1.7.02.10';

        _o_.datetime = {
            version: version
        };

        window.octapushJS = window._o_ = _o_;
    }
})();