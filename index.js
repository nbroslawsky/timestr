var INTERVALS = [
	{ match: /^(\d+)\s*(w)(?:(?:ee)?ks?)?\s*$/i, ms: 604800000 },
	{ match: /^(\d+)\s*(d)(?:ays?)?\s*$/i, ms: 86400000 },
	{ match: /^(\d+)\s*(h)(?:(?:ou)?rs?)?\s*$/i, ms: 3600000 },
	{ match: /^(\d+)\s*(m)(?:in(?:ute)?s?)?\s*$/i, ms: 60000 },
	{ match: /^(\d+)\s*(s)(?:ec(?:ond)?s?)?\s*$/i, ms: 1000 },
	{ match: /^(\d+)\s*(?:ms|milliseconds?)?\s*$/i, ms: 1 }
];

module.exports = function(str) {

	var i = 0, m;
	str = str.toString();

	for(i = INTERVALS.length; i--;) {
		if(m = str.match(INTERVALS[i].match) || false) break;
	}

	var ms = m && parseInt(m[1], 10) * (INTERVALS[i] && INTERVALS[i].ms || 1) || false;
	return {
		time: m && parseInt(m[1], 10) || false,
		units: m && (m[2] || 'ms').toLowerCase() || false,

		toMilliseconds : function() { return (ms === false) ? false : ms; },
		toSeconds : function() { return (ms === false) ? false : (ms / INTERVALS[4].ms); },
		toMinutes : function() { return (ms === false) ? false : (ms / INTERVALS[3].ms); },
		toHours : function() { return (ms === false) ? false : (ms / INTERVALS[2].ms); },
		toDays : function() { return (ms === false) ? false : (ms / INTERVALS[1].ms); },
		toWeeks : function() { return (ms === false) ? false : (ms / INTERVALS[0].ms); }
	};

};
