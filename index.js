'use strict';

module.exports.tokenBefore = function(token) {
	if (token.type === 'LineComment') {
		token.raw = '// ' + token.value;
	}
};
