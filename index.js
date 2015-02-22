'use strict';

var noWhitespace = /^\w+/;

module.exports.tokenBefore = function(token) {
	if(!token.value || token.type !== 'LineComment') {
		return;
	}

	if (noWhitespace.test(token.value)) {
		token.raw = '// ' + token.value;
		return;
	}

};
