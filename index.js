var INTERVALS = [
	{ match: /^(\d+)\s*(w)(?:(?:ee)?ks?)?\s*$/i, ms: 604800000 },
	{ match: /^(\d+)\s*(d)(?:ays?)?\s*$/i, ms: 86400000 },
	{ match: /^(\d+)\s*(h)(?:(?:ou)?rs?)?\s*$/i, ms: 3600000 },
	{ match: /^(\d+)\s*(m)(?:in(?:ute)?s?)?\s*$/i, ms: 60000 },
	{ match: /^(\d+)\s*(s)(?:ec(?:ond)?s?)?\s*$/i, ms: 1000 }
];

function bad() { return false; }

module.exports = function(str) {

	var i = 0, m;
	str = str.toString();

	for(; i < INTERVALS.length; i++) {
		if(m = str.match(INTERVALS[i].match)) break;
	}

	if(!m) m = str.match(/^(\d+)\s*(?:m(?:illisecond)?s)?\s*$/);

	if(!m) {
		return {
			time : false,
			units : false,
			toMilliseconds : bad,
			toSeconds : bad,
			toMinutes : bad,
			toHours : bad,
			toDays : bad,
			toWeeks : bad
		};
	}

	var ms = parseInt(m[1], 10) * (INTERVALS[i] && INTERVALS[i].ms || 1);
	return {
		time: parseInt(m[1], 10),
		units: (m[2] || 'ms').toLowerCase(),

		toMilliseconds : function() { return ms; },
		toSeconds : function() { return ms / INTERVALS[4].ms; },
		toMinutes : function() { return ms / INTERVALS[3].ms; },
		toHours : function() { return ms / INTERVALS[2].ms; },
		toDays : function() { return ms / INTERVALS[1].ms; },
		toWeeks : function() { return ms / INTERVALS[0].ms; }
	};

};