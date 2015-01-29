'use strict';

var assert = require('assert');

var mocha = require('mocha');
var esformatter = require('esformatter');

var spacedLinedCommentPlugin = require('./');

esformatter.register(spacedLinedCommentPlugin);

mocha.it('test', function() {
	// Given.
	var codeStr = '//Comment string';

	// When.
	var formattedCode = esformatter.format(codeStr);

	// Then.
	assert.equal(formattedCode, '// Comment string');
});
