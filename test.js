'use strict';
var assert = require('assert');
var cssLonghand = require('./');
var data = require('fs').readFileSync('./fixture.css','utf-8');
var expected = require('fs').readFileSync('./expected.css','utf-8');

it('should expand css', function () {
	assert.strictEqual(cssLonghand(data), expected);
});
