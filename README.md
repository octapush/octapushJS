# octapushJS
<!--octapushJS adalah framework javascript yang dibangun untuk mempermudah Anda dalam menangani berbagai macam kebutuhan dalam membangun sebuah aplikasi. Tidak seperti kebanyakan framework javascript lainnya (sebagai contoh, underscore, stringjs, momentjs, dll) yang dibangun secara spesifik untuk menangani sebuah tipe data saja. octapushJS dibangun dengan berbagai macam kemampuan, namun tetap memperhatikan aspek ringan, cepat, dan efektif.-->

`octapushJS` is a javascript framework that is built for your convenience in handling a wide variety of needs in building an application. Unlike most another javascript framework (for example, underscore, stringjs, momentjs, etc.) are built specifically to handle one data type only. `octapushJS` built with a variety of abilities, but lightweight, fast, and effective.


# Fitur
<!--octapushJS dibangun dengan modul terpisah untuk setiap kebutuhan spesifik dengan menggunakan sistem plug-in. Sehingga Anda hanya perlu memuat modul yang dibutuhkan saja. Karna bersifat plugin, proses pemuatan modul-modul tersebut pun sudah didesain dengan mudah dan efisien.-->

`octapushJS` built with separate modules for each specific need by using a _plugin_ system. So you just need to load the needed modules only. Since supporting **plugin concept**, the process of loading modules has been designed to easily and efficiently.

<!--Modul-modul yang didukung oleh octapushJS diantaranya adalah: **ajax, utility, compare, string, datetime, number,**  dan **array.**-->

Supported modules by octapushJS are: **ajax, utility, compare, string, datetime, number,**  dan **array.**

# How To Use
<!--Seperti framework javascript lainnya (misal jQuery dengan karakter dollar ($), underscores dengan karakter underscore, dsb), instansi octapushJS dikonstruksi dengan menggunakan karakter omega **(*_o*_)**.-->

Just like another javascript framework (eg. jQuery using a dollar sign ($), underscores with an underscore sign, etc), octapushJS instance constructed using an omega sign **(*_o*_)**.

<!--Untuk memulai menggunakan octapushJS, pertama Anda kloning paket lengkap framework octapushJS [disini](https://github.com/octapush/octapushJS/), dan lampirkan file octapush.js kedalam dokumen HTML anda seperti berikut:-->

To get started using `octapushJS`, first you need to clone full packages of `octapushJS` framework [from here](https://github.com/octapush/octapushJS/), and attach `octapush.js` file into your HTML document as below:

```
<html>
    <head>
        <meta charset="utf-8" />
        <title>octapushJS Base Sample</title>
        <script type="text/javascript" src="../../octapush.js"></script>
    </head>
    <body>
        Hello World
    </body>
</html>
``` 

# Simple Demo

**String :**

Demo with **unloaded** string-module:
```
_o_.utility.importPlugin('string', function() {
    var greeting = 'Hi, my name is {{name}}, I am from {{nationality}}. How about you?'
    var data = {
        name: 'Fadhly Permata',
        nationality: 'Indonesia'
    };

    alert(_o_.string.template(greeting, data));    
});
```

Demo with **loaded** string-module:
```
var greeting = 'Hi, my name is {{name}, I am from {{nationality}. How about you?'
var data = {
    name: 'Fadhly Permata',
    nationality: 'Indonesia'
};

alert(_o_.string.template(greeting, data));
```


**Datetime :**

Demo with **unloaded** datetime-module:
```
_o_.utility.importPlugin(['datetime', 'string'], function() {
    var greeting = 'Hi, my name is {{name}}, I am born at {{dob}}. How about you?'
    var data = {
        name: 'Fadhly Permata',
        
        // datetime-module sample implement
        dob: _o_.datetime.format('1985-05-13', 'mmmm dd, yyyy')
    };

    alert(_o_.string.template(greeting, data));
});
```

# Documentation
<!--Anda dapat melihat dokumentasi lengkap octapushJS [disini](http://octapushjs.hol.es).-->

You can see complete octapushJS documentation [from here](http://octapushjs.hol.es).