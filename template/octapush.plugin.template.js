/*
 === octapushJS.pluginName ===
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
    if (!window.octapushJS || !window._o_) {
        console.log('octapushJS.pluginName has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.11';

        _o_.pluginName = _o_.utility.extend(_o_.utility.ifNull(_o_.pluginName, {}), {
            version: version
            /**
             * Write your code here using JSON style.
             */
        });
    }
})(window);