'use strict';

var rocamboleToken = require('rocambole-token');

module.exports.tokenBefore = function(token) {
	if (token.type === 'LineComment') {
		token.raw = '// ' + token.value;
	}
};
