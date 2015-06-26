# css-longhand [![Build Status](https://travis-ci.org/hemanth/css-longhand.svg?branch=master)](https://travis-ci.org/hemanth/css-longhand)

> Expand CSS shorthands.

## Why?

For HTML E-maliers.

## Install

```
$ npm install --save css-longhand
```

__Supported CSS properties:__

* margin

* padding

* border

## Usage

```js
var cssLonghand = require('css-longhand');
cssLonghand('/path/to/css');
```


## Example:

```css
.classname {
	margin: 0;
}
```

__Pass to `cssLonghand` will result in:__

```css
.classname {
		margin-top: 0;
		margin-right: 0;
		margin-bottom: 0;
		margin-left: 0;
}
```

__TODO:__

* Re-implement with streams (find the comment in the code)

* Support more CSS properties.

## License

MIT © [hemanth.hm](http://h3manth.com)
