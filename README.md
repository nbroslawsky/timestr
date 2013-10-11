timestr
=======

A simple module for interpreting time duration strings


[![Build Status](https://secure.travis-ci.org/nbroslawsky/timestr.png?branch=master)](http://travis-ci.org/nbroslawsky/timestr)
[![browser support](http://ci.testling.com/nbroslawsky/timestr.png)](http://ci.testling.com/nbroslawsky/timestr)


### Installation

`npm install timestr`


### Useage

Create a timestr object from a time duration string and use as needed:

```javascript
var timestr = require('timestr'),
    time = timestr('5 weeks');

time.toMilliseconds(); // => 3024000000
time.toSeconds(); // => 3024000
time.toMinutes(); // => 50400
time.toHours(); // => 840
time.toDays(); // => 35
time.toWeeks() // => 5;
```

### Formats

You can create a timestr object from most common formats:

```javascript
var timestr = require('timestr');

// milliseconds
timestr('1ms');
timestr('1 millisecond');
timestr('2 milliseconds');

// seconds
timestr('1s');
timestr('1 sec');
timestr('1 second');
timestr('2 seconds');

// minutes
timestr('1m');
timestr('1 min');
timestr('1 minute');
timestr('2 minutes');

// hours
timestr('1h');
timestr('1 hr');
timestr('1 hour');
timestr('2 hours');

// days
timestr('1d');
timestr('1 day');
timestr('2 days');

// weeks
timestr('1w');
timestr('1 wk');
timestr('1 week');
timestr('2 weeks');
```
