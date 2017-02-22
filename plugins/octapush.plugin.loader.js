/*
 === octapushJS.pluginLoader ===
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
        alert('octapushJS.pluginLoader has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.22';

        var internal = {
            settings: {
                firebaseConfig: {
                    apiKey: "AIzaSyC2fZ8eIwF8DzFcelp_qh9FLI01Q8o70g0",
                    authDomain: "octapush-plugin-loader.firebaseapp.com",
                    databaseURL: "https://octapush-plugin-loader.firebaseio.com",
                    storageBucket: "octapush-plugin-loader.appspot.com",
                    messagingSenderId: "441046979808"
                }
            },
            init: function () {
                _o_.ajax.getScript("https://www.gstatic.com/firebasejs/3.6.10/firebase.js", function(xhr) {
                    console.log(xhr.responseText);
                });
            }
        };

        _o_.pluginLoader = Object.assign(_o_.utility.ifNull(_o_.pluginLoader, {}), {
            settings: {
                initialized: false,
                loadedPlugin: []
            },
            version: version
        });
    }
})(window);