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
	});

	mocha.it('should not modify a comment if it has a leading space.', function() {
		// Given.
		var codeStr = '// Comment string';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, '// Comment string');
	});

	mocha.it('should not modify a comment if it has many leading spaces.', function() {
		// Given.
		var codeStr = '//  Comment string';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, '//  Comment string');
	});

	mocha.it('should not add a space if there is no text after slashes', function() {
		// Given.
		var codeStr = '//';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, '//');
	});

	mocha.it('should avoid adding more whitespace', function() {
		// Given.
		var codeStr = '//   ';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, '//   ');
	});

	mocha.it('should avoid transforming block comments', function() {
		// Given.
		var codeStr = '/*some comment */';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, codeStr);
	});

	mocha.it('should avoid transforming a comment like string', function() {
		// Given.
		var codeStr = 'var url = "//somethingfornothing.com";';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, codeStr);
	});

	mocha.it('should transform 2 consecutive line comments', function() {
		// Given.
		var codeStr = '//TODO: something\n//FIXME: other thing';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, '// TODO: something\n// FIXME: other thing');
	});

	mocha.it('should transform correctly with a comment inside a comment', function() {
		// Given.
		var codeStr = '//TODO: something//fornothing';

		// When.
		var formattedCode = esformatter.format(codeStr);

		// Then.
		assert.equal(formattedCode, '// TODO: something//fornothing');
	});
});
