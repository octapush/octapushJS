# octapushJS
`octapushJS` is a javascript framework that is built for your convenience in handling a wide variety of needs in building an application. Unlike most another javascript framework (for example, underscore, stringjs, momentjs, etc.) are built specifically to handle one data type only. `octapushJS` built with a variety of abilities, but lightweight, fast, and effective.

# Fitur
`octapushJS` built with separate modules for each specific need by using a _plugin_ system. So you just need to load the needed modules only. Since supporting **plugin concept**, the process of loading modules has been designed to easily and efficiently.

Supported modules by `octapushJS` are: **ajax, utility, compare, string, datetime, number,**  dan **array.**

# How To Use
Just like another javascript framework (eg. jQuery using a dollar sign ($), underscores with an underscore sign, etc), `octapushJS` instance constructed using an omega sign **(*_o*_)**.

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
You can see complete `octapushJS` documentation [from here](http://octapushjs.hol.es).