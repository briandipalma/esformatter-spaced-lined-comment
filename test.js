'use strict';

var assert = require('assert');

var mocha = require('mocha');
var esformatter = require('esformatter');

var spacedLinedCommentPlugin = require('./');

esformatter.register(spacedLinedCommentPlugin);

mocha.describe('spaced-lined-comment', function() {
	mocha.it('should add a space to comment if it lacks a space.', function() {
		// Given.
		var codeStr = '//Comment string';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, '// Comment string');
	})
});
