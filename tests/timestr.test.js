var assert = require('chai').assert,
	timestr = require('../index.js');

describe('converting strings', function() {

	var fifteenDaysShort = '15d',
		fourteenDaysShort = '14d',
		fifteenDaysMedium = '15 day',
		fourteenDaysMedium = '14 day',
		fifteenDaysLong = '15 days',
		fourteenDaysLong = '14 days';

	it('should convert to milliseconds properly', function() { assert.equal(timestr(fifteenDaysShort).toMilliseconds(),1296000000); });
	it('should convert to seconds properly', function() { assert.equal(timestr(fifteenDaysShort).toSeconds(),1296000); });
	it('should convert to minutes properly', function() { assert.equal(timestr(fifteenDaysShort).toMinutes(),21600); });
	it('should convert to hours properly', function() { assert.equal(timestr(fifteenDaysShort).toHours(),360); });
	it('should convert to days properly', function() { assert.equal(timestr(fifteenDaysShort).toDays(),15); });
	it('should convert to weeks properly', function() { assert.equal(timestr(fourteenDaysShort).toWeeks(),2); });

	it('should convert to milliseconds properly', function() { assert.equal(timestr(fifteenDaysMedium).toMilliseconds(),1296000000); });
	it('should convert to seconds properly', function() { assert.equal(timestr(fifteenDaysMedium).toSeconds(),1296000); });
	it('should convert to minutes properly', function() { assert.equal(timestr(fifteenDaysMedium).toMinutes(),21600); });
	it('should convert to hours properly', function() { assert.equal(timestr(fifteenDaysMedium).toHours(),360); });
	it('should convert to days properly', function() { assert.equal(timestr(fifteenDaysMedium).toDays(),15); });
	it('should convert to weeks properly', function() { assert.equal(timestr(fourteenDaysMedium).toWeeks(),2); });

	it('should convert to milliseconds properly', function() { assert.equal(timestr(fifteenDaysLong).toMilliseconds(),1296000000); });
	it('should convert to seconds properly', function() { assert.equal(timestr(fifteenDaysLong).toSeconds(),1296000); });
	it('should convert to minutes properly', function() { assert.equal(timestr(fifteenDaysLong).toMinutes(),21600); });
	it('should convert to hours properly', function() { assert.equal(timestr(fifteenDaysLong).toHours(),360); });
	it('should convert to days properly', function() { assert.equal(timestr(fifteenDaysLong).toDays(),15); });
	it('should convert to weeks properly', function() { assert.equal(timestr(fourteenDaysLong).toWeeks(),2); });

	it('should return false on bad inputs', function() { assert.equal(timestr('whatup').toSeconds(),false); });

});

describe('milliseconds', function() {

	it('should convert 1 millisecond', function() {
		assert.equal(timestr('1 ms').toMilliseconds(), 1);
		assert.equal(timestr('1ms').toMilliseconds(), 1);
		assert.equal(timestr('1 millisecond').toMilliseconds(), 1);
		assert.equal(timestr('1 milliseconds').toMilliseconds(), 1);
	});

	it('should convert 1337 millisecond', function() {
		assert.equal(timestr('1337 ms').toMilliseconds(), 1337);
		assert.equal(timestr('23ms').toMilliseconds(), 1337);
		assert.equal(timestr('1337 millisecond').toMilliseconds(), 1337);
		assert.equal(timestr('1337 milliseconds').toMilliseconds(), 1337);
	});

});


describe('seconds', function() {

	it('should convert 1 second', function() {
		assert.equal(timestr('1 s').toSeconds(), 1);
		assert.equal(timestr('1s').toSeconds(), 1);
		assert.equal(timestr('1 second').toSeconds(), 1);
		assert.equal(timestr('1 seconds').toSeconds(), 1);
	});

		it('should convert 1337 second', function() {
		assert.equal(timestr('1337 s').toSeconds(), 1337);
		assert.equal(timestr('1337s').toSeconds(), 1337);
		assert.equal(timestr('1337 second').toSeconds(), 1337);
		assert.equal(timestr('1337 seconds').toSeconds(), 1337);
	});

});

