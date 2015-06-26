'use strict';
var assert = require('assert');
var cssLonghand = require('./');

it('should expand css', function () {
	assert.strictEqual(cssLonghand('./fixture.css'),'.classname {\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: 0;\n  margin-left: 0;\n}\n');
});
