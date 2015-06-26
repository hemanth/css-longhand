'use strict';
var assert = require('assert');
var cssLonghand = require('./');
var data = require('fs').readFileSync('./fixture.css','utf-8');
it('should expand css', function () {
	assert.strictEqual(cssLonghand(data),'.classname {\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: 0;\n  margin-left: 0;\n}\n');
});
