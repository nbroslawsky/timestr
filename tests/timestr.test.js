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