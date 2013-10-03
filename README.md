timestr
=======

[![Build Status](https://secure.travis-ci.org/nbroslawsky/timestr.png?branch=master)](http://travis-ci.org/nbroslawsky/timestr)
[![browser support](http://ci.testling.com/nbroslawsky/timestr.png)](http://ci.testling.com/nbroslawsky/timestr)

A simple module for interpreting time duration strings

`npm install timestr`


---

### Useage

You can create a timestr object from the following formats:

```javascript
var timestr = require('timestr');

// seconds
timestr('1s');
timestr('1 second');
timestr('2 seconds');

// minutes
timestr('1m');
timestr('1 minute');
timestr('2 minutes');

// hours
timestr('1h');
timestr('1 hour');
timestr('2 hours');

// days
timestr('1d');
timestr('1 day');
timestr('2 days');

// weeks
timestr('1w');
timestr('1 week');
timestr('2 weeks');

```

Once you create a timestr object, you can convert it into any of the following units of time for your consumption pleasure:

```javascript
var time = timestr('5 weeks');

time.toMilliseconds();
time.toSeconds();
time.toMinutes();
time.toHours();
time.toDays();
time.toWeeks();

```
