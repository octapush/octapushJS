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
(function (w) {
    'use strict';
    if (!w.octapushJS || !w._o_) {
        alert('octapushJS.datetime has dependency with "octapush.js". Please add the file first.');
        return;

    } else {
        const version = '1.7.02.13';

        // BOF: LOCALIZATION 
        _o_.localization.datetime = Object.assign(_o_.utility.ifNull(_o_.localization.datetime, {}), {
            'EN-US': {
                localizationName: 'English US',
                translator: 'Fadhly Permata',
                days: {
                    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                },
                months: {
                    short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                }
            }
        });
        // EOF: LOCALIZATION

        // BOF: HELPER
        _o_.string = Object.assign(_o_.utility.ifNull(_o_.string, {}), {
            padLeft: function (str, len, char) {
                len = _o_.utility.ifNull(len, 0x1);
                char = _o_.utility.ifNull(char, ' ');

                return _o_.compare.isNullOrEmpty(str) ?
                    '' :
                    (
                        len <= str.length ?
                            str :
                            new Array(len - str.length + 0x1).join(char) + str
                    );
            }
        });

        _o_.number = Object.assign(_o_.number ? _o_.number : {}, {
            zeroPad: function (numb, lenOfNumber) {
                return _o_.compare.isNullOrEmpty(numb) ?
                    0 :
                    (function () {
                        return _o_.compare.isNullOrEmpty(lenOfNumber) ?
                            numb :
                            _o_.string.padLeft(numb.toString(), lenOfNumber, '0');
                    })();
            }
        });
        // EOF: HELPER

        _o_.datetime = Object.assign(_o_.utility.ifNull(_o_.datetime, {}), {
            version: version,
            localization: 'EN-US',
            isLeapYear: function (year) {
                year = _o_.utility.ifNull(year, new Date().getFullYear());
                return (0x0 === year % 0x4 && 0x0 !== year % 0x64) || 0x0 === year % 0x190;
            },
            now: function () {
                return +(new Date());
            },
            toJson: function (datetime) {
                datetime = new Date(_o_.utility.ifNull(datetime, _o_.datetime.now()));

                return {
                    year: datetime.getFullYear(),
                    shortYear: datetime.getFullYear().toString().substring(2),
                    month: datetime.getMonth() + 1,
                    longMonthName: _o_.localization.datetime[_o_.datetime.localization].months.long[datetime.getMonth()],
                    shortMonthName: _o_.localization.datetime[_o_.datetime.localization].months.short[datetime.getMonth()],
                    date: datetime.getDate(),
                    longDayName: _o_.localization.datetime[_o_.datetime.localization].days.long[datetime.getDay()],
                    shortDayName: _o_.localization.datetime[_o_.datetime.localization].days.short[datetime.getDay()],
                    hour: datetime.getHours(),
                    minute: datetime.getMinutes(),
                    second: datetime.getSeconds(),
                    milliSecond: datetime.getMilliseconds()
                }
            },
            format: function (datetime, format) {
                datetime = new Date(_o_.utility.ifNull(datetime, _o_.datetime.now()));
                format = _o_.utility.ifNull(format, 'dddd, dd mmmm yyyyy (hh:ii:ss)');

                var dtJson = _o_.datetime.toJson(datetime);

                var arrFormat = 'dddd,ddd,dd,mmmm,mmm,mm,yyyy,yy,hh,ii,ss'.split(',');
                var arrDt = [
                    dtJson.longDayName,
                    dtJson.shortDayName,
                    _o_.number.zeroPad(dtJson.date, 2),
                    dtJson.longMonthName,
                    dtJson.shortMonthName,
                    _o_.number.zeroPad(dtJson.month, 2),
                    dtJson.year,
                    dtJson.shortYear,
                    _o_.number.zeroPad(dtJson.hour, 2),
                    _o_.number.zeroPad(dtJson.minute, 2),
                    _o_.number.zeroPad(dtJson.second, 2)
                ];
                console.log(arrDt);
                arrFormat.forEach(function (val, key) {
                    format = format.replace(new RegExp(val, 'g'), arrDt[key]);
                });

                return format;
            },
            shift: function (datetime, type, counter) {
                return _o_.compare.isNullOrEmpty(datetime) || _o_.compare.isNullOrEmpty(type) || _o_.compare.isNullOrEmpty(counter) ?
                    _o_.datetime.now() :
                    (function () {
                        datetime = new Date(datetime);

                        switch (type.toLowerCase()) {
                            case 'year' || 'y':
                                datetime = new Date(datetime.setFullYear(datetime.getFullYear() + 1));
                                break;

                            case 'month' || 'M':
                                datetime = new Date(datetime.setFullYear(datetime.getFullYear(), datetime.getMonth() + counter));
                                break;

                            case 'day' || 'd':
                                datetime = new Date(datetime.setFullYear(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + counter));
                                break;

                            case 'hour' || 'h':
                                datetime = new Date(datetime.setHours(datetime.getHours() + counter));
                                break;

                            case 'minute' || 'i':
                                datetime = new Date(datetime.setHours(datetime.getHours(), datetime.getMinutes + counter));
                                break;

                            case 'second' || 's':
                                datetime = new Date(datetime.setHours(datetime.getHours(), datetime.getMinutes(), datetime.getSeconds() + counter));
                                break;

                            case 'millisecond' || 'ms':
                                datetime = new Date(datetime.setHours(datetime.getHours(), datetime.getMinutes(), datetime.getSeconds(), datetime.getMilliseconds() + counter));
                                break;

                            default:
                                break;
                        }

                        return datetime;
                    })();
            },
            year: function (datetime) {
                return _o_.datetime.toJson(datetime).year;
            },
            month: function (datetime) {
                return _o_.datetime.toJson(datetime).month;
            },
            date: function (datetime) {
                return _o_.datetime.toJson(datetime).date;
            },
            hour: function (datetime) {
                return _o_.datetime.toJson(datetime).hour;
            },
            minute: function (datetime) {
                return _o_.datetime.toJson(datetime).minute;
            },
            second: function (datetime) {
                return _o_.datetime.toJson(datetime).second;
            },
            milliSecond: function (datetime) {
                return _o_.datetime.toJson(datetime).milliSecond;
            },
            shortDayName: function (datetime) {
                return _o_.datetime.toJson(datetime).shortDayName;
            },
            longDayName: function (datetime) {
                return _o_.datetime.toJson(datetime).longDayName;
            },
            shortMonthName: function (datetime) {
                return _o_.datetime.toJson(datetime).shortMonthName;
            },
            longMonthName: function (datetime) {
                return _o_.datetime.toJson(datetime).longMonthName;
            },
            fromDotnetDate: function (dotnetDt) {
                return _o_.compare.isNullOrEmpty(dotnetDt) ? null : new Date(parseInt(dotnetDt.substring(6)));
            }
        });
    }
})(window);