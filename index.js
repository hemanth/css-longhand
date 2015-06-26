'use strict';
var fs = require('fs');
var longhand = function(data) {
	  // R.E's from grunt-css-shorthand.
		var pattern;
		// margin/padding
		pattern = /[\s]*(margin|padding)[\s]*:[\s]*([\w%\-]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-top: $2$3;\n  $1-right: $2$3;\n  $1-bottom: $2$3;\n  $1-left: $2$3;");
		pattern = /[\s]*(margin|padding)[\s]*:[\s]*([\w%\-]+)[\s]+([\w%\-]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-top: $2$4;\n  $1-right: $3$4;\n  $1-bottom: $2$4;\n  $1-left: $3$4;");
		pattern = /[\s]*(margin|padding)[\s]*:[\s]*([\w%\-]+)[\s]+([\w%\-]+)[\s]+([\w%\-]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-top: $2$5;\n  $1-right: $3$5;\n  $1-bottom: $4$5;\n  $1-left: $3$5;");
		pattern = /[\s]*(margin|padding)[\s]*:[\s]*([\w%\-]+)[\s]+([\w%\-]+)[\s]+([\w%\-]+)[\s]+([\w%\-]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-top: $2$6;\n  $1-right: $3$6;\n  $1-bottom: $4$6;\n  $1-left: $5$6;");

		// border:
		pattern = /[\s]*(border(?:-width|-style|-color))[\s]*:[\s]*([#\w%]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  border: $2$3;;");
		// Split up properies to individual rules:
		// two properties
		pattern = /[\s]*(border(?:-top|-right|-bottom|-left)*)[\s]*:[\s]*([#\w%]+)[\s]+([#\w%]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1: $2$4;\n  $1: $3$4;");
		// three properties
		pattern = /[\s]*(border(?:-top|-right|-bottom|-left)*)[\s]*:[\s]*([#\w%]+)[\s]+([#\w%]+)[\s]+([#\w%]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1: $2$5;\n  $1: $3$5;\n  $1: $4$5;");
		// single property to -top, -right, -bottom, -left
		pattern = /[\s]*(border)[\s]*:[\s]*([#\w%]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-top: $2$3;\n  $1-right: $2$3;\n  $1-bottom: $2$3;\n  $1-left: $2$3;");
		// border-style
		pattern = /[\s]*(border-(?:top|right|bottom|left))[\s]*:[\s]*(none|hidden|dashed|dotted|solid|double|groove|ridge|inset|outset)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-style: $2$3;");
		// border-width
		pattern = /[\s]*(border-(?:top|right|bottom|left))[\s]*:[\s]*([\d]+[a-zA-Z]*[%]*)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-width: $2$3;");
		// border-coloor
		pattern = /[\s]*(border-(?:top|right|bottom|left))[\s]*:[\s]*(#[\da-fA-F]{3,6}|[a-zA-Z]+)([\s]*|[\s]*!important[\s]*);/gm;
		data = data.replace(pattern, "\n  $1-color: $2$3;");

		return data;
};

/*
Streams probably for version 2.0 of css-longhead.
//fs.createReadStream(path).pipe(parser);
var Transform = require('stream').Transform;
var parser = new Transform();
parser._transform = function(data, encoding, done) {
  this.push(longhand(data.toString()));
  done();
};*/

module.exports = function (css) {
	if(typeof css !== 'string') {
		throw new Error("First param must be a string!");
	}
	return longhand(css);
};
