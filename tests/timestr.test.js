var assert = require('chai').assert,
	timestr = require('../index.js');



describe('numbers', function() {
	it('should be treated as milliseconds', function() {
		assert.equal(timestr(1).toMilliseconds(), 1);
		assert.equal(timestr(1337).toMilliseconds(), 1337);
	});
});


describe('numeric strings (no units)', function() {
	it('should be treated as milliseconds', function() {
		assert.equal(timestr('1').toMilliseconds(), 1);
		assert.equal(timestr('1337').toMilliseconds(), 1337);
	});
});


describe('days', function() {
	var fifteenDaysShort = '15d',
		fourteenDaysShort = '14d',
		fifteenDaysMedium = '15 day ',
		fourteenDaysMedium = '14 day',
		fifteenDaysLong = ' 15 days',
		fourteenDaysLong = '14 days';

	describe('short string', function() {
		it('should convert to milliseconds properly', function() { assert.equal(timestr(fifteenDaysShort).toMilliseconds(),1296000000); });
		it('should convert to seconds properly', function() { assert.equal(timestr(fifteenDaysShort).toSeconds(),1296000); });
		it('should convert to minutes properly', function() { assert.equal(timestr(fifteenDaysShort).toMinutes(),21600); });
		it('should convert to hours properly', function() { assert.equal(timestr(fifteenDaysShort).toHours(),360); });
		it('should convert to days properly', function() { assert.equal(timestr(fifteenDaysShort).toDays(),15); });
		it('should convert to weeks properly', function() { assert.equal(timestr(fourteenDaysShort).toWeeks(),2); });
	});

	describe('medium string', function() {
		it('should convert to milliseconds properly', function() { assert.equal(timestr(fifteenDaysMedium).toMilliseconds(),1296000000); });
		it('should convert to seconds properly', function() { assert.equal(timestr(fifteenDaysMedium).toSeconds(),1296000); });
		it('should convert to minutes properly', function() { assert.equal(timestr(fifteenDaysMedium).toMinutes(),21600); });
		it('should convert to hours properly', function() { assert.equal(timestr(fifteenDaysMedium).toHours(),360); });
		it('should convert to days properly', function() { assert.equal(timestr(fifteenDaysMedium).toDays(),15); });
		it('should convert to weeks properly', function() { assert.equal(timestr(fourteenDaysMedium).toWeeks(),2); });
	});

	describe('long string', function() {
		it('should convert to milliseconds properly', function() { assert.equal(timestr(fifteenDaysLong).toMilliseconds(),1296000000); });
		it('should convert to seconds properly', function() { assert.equal(timestr(fifteenDaysLong).toSeconds(),1296000); });
		it('should convert to minutes properly', function() { assert.equal(timestr(fifteenDaysLong).toMinutes(),21600); });
		it('should convert to hours properly', function() { assert.equal(timestr(fifteenDaysLong).toHours(),360); });
		it('should convert to days properly', function() { assert.equal(timestr(fifteenDaysLong).toDays(),15); });
		it('should convert to weeks properly', function() { assert.equal(timestr(fourteenDaysLong).toWeeks(),2); });
	});

	it('should return false on bad inputs', function() { assert.equal(timestr('whatup').toSeconds(),false); });
});


describe('milliseconds strings', function() {
	it('should convert 1 millisecond', function() {
		assert.equal(timestr('1 ms').toMilliseconds(), 1);
		assert.equal(timestr('1ms').toMilliseconds(), 1);
		assert.equal(timestr('1 millisecond ').toMilliseconds(), 1);
		assert.equal(timestr(' 1 milliseconds').toMilliseconds(), 1);
	});

	it('should convert 1337 milliseconds', function() {
		assert.equal(timestr('1337 ms').toMilliseconds(), 1337);
		assert.equal(timestr('1337ms').toMilliseconds(), 1337);
		assert.equal(timestr('1337 millisecond ').toMilliseconds(), 1337);
		assert.equal(timestr(' 1337 milliseconds').toMilliseconds(), 1337);
	});
});


describe('seconds strings', function() {
	it('should convert 1 second', function() {
		assert.equal(timestr('1 s').toMilliseconds(), 1000);
		assert.equal(timestr('1s').toMilliseconds(), 1000);
		assert.equal(timestr('1 sec').toMilliseconds(), 1000);
		assert.equal(timestr('1 secs').toMilliseconds(), 1000);
		assert.equal(timestr('1 second ').toMilliseconds(), 1000);
		assert.equal(timestr(' 1 seconds').toMilliseconds(), 1000);
	});

	it('should convert 1337 seconds', function() {
		assert.equal(timestr('1337 s').toSeconds(), 1337);
		assert.equal(timestr('1337s').toSeconds(), 1337);
		assert.equal(timestr('1337 sec').toSeconds(), 1337);
		assert.equal(timestr('1337 secs').toSeconds(), 1337);
		assert.equal(timestr('1337 second ').toSeconds(), 1337);
		assert.equal(timestr(' 1337 seconds').toSeconds(), 1337);
	});
});


describe('minutes strings', function() {
	it('should convert 1 minute', function() {
		assert.equal(timestr('1 m').toSeconds(), 60);
		assert.equal(timestr('1m').toSeconds(), 60);
		assert.equal(timestr('1 min').toSeconds(), 60);
		assert.equal(timestr('1 mins').toSeconds(), 60);
		assert.equal(timestr('1 minute ').toSeconds(), 60);
		assert.equal(timestr(' 1 minutes').toSeconds(), 60);
	});

	it('should convert 1337 minutes', function() {
		assert.equal(timestr('1337 m').toMinutes(), 1337);
		assert.equal(timestr('1337m').toMinutes(), 1337);
		assert.equal(timestr('1337 min').toMinutes(), 1337);
		assert.equal(timestr('1337 mins').toMinutes(), 1337);
		assert.equal(timestr('1337 minute ').toMinutes(), 1337);
		assert.equal(timestr(' 1337 minutes').toMinutes(), 1337);
	});
});


describe('hours strings', function() {
	it('should convert 1 hour', function() {
		assert.equal(timestr('1 h').toMinutes(), 60);
		assert.equal(timestr('1h').toMinutes(), 60);
		assert.equal(timestr('1 hr').toMinutes(), 60);
		assert.equal(timestr('1 hrs').toMinutes(), 60);
		assert.equal(timestr('1 hour ').toMinutes(), 60);
		assert.equal(timestr(' 1 hours').toMinutes(), 60);
	});

	it('should convert 1337 hours', function() {
		assert.equal(timestr('1337 h').toHours(), 1337);
		assert.equal(timestr('1337h').toHours(), 1337);
		assert.equal(timestr('1337 hr').toHours(), 1337);
		assert.equal(timestr('1337 hrs').toHours(), 1337);
		assert.equal(timestr('1337 hour ').toHours(), 1337);
		assert.equal(timestr(' 1337 hours').toHours(), 1337);
	});
});


describe('weeks strings', function() {
	it('should convert 1 week', function() {
		assert.equal(timestr('1 w').toDays(), 7);
		assert.equal(timestr('1w').toDays(), 7);
		assert.equal(timestr('1 wk').toDays(), 7);
		assert.equal(timestr('1 wks').toDays(), 7);
		assert.equal(timestr('1 week ').toDays(), 7);
		assert.equal(timestr(' 1 weeks').toDays(), 7);
	});

	it('should convert 1337 weeks', function() {
		assert.equal(timestr('1337 w').toWeeks(), 1337);
		assert.equal(timestr('1337w').toWeeks(), 1337);
		assert.equal(timestr('1337 wk').toWeeks(), 1337);
		assert.equal(timestr('1337 wks').toWeeks(), 1337);
		assert.equal(timestr('1337 week ').toWeeks(), 1337);
		assert.equal(timestr(' 1337 weeks').toWeeks(), 1337);
	});
});
