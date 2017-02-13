/*
 === octapushJS.pluginName ===
 Author  : Fadhly Permata
 eMail   : - fadhly.permata@gmail.com
 URL     : www.octapush.com

 === Credits ===
 Prime Developer : Fadhly Permata

 === Contributors ===
 ... just type your name here after editing the script ...
 */
(function (w) {
    'use strict';
    if (!window.octapushJS || !window._o_) {
        alert('octapushJS.pluginName has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        var version = '1.7.02.11';

        _o_.pluginName = Object.assign(_o_.utility.ifNull(_o_.pluginName, {}), {
            version: version
            /**
             * Write your code here using JSON style.
             */
        });
    }
})(window);