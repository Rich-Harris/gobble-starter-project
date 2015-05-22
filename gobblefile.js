var gobble = require( 'gobble' );

module.exports = gobble( 'src/js' )

	// first we do a one-to-one transformation of src/*.js files
	.transform( 'babel' )

	// then we turn them into a UMD bundle
	.transform( 'esperanto-bundle', {
		// start at main.js, import dependencies recursively
		entry: 'main.js',

		// generate this file
		dest: 'my-library.js',

		// boring distinction between ES6 default and named modules...
		// https://github.com/esperantojs/esperanto/wiki/Strict-mode
		strict: true,

		// use universal module definition
		type: 'umd',

		// expose as window.myLibrary
		name: 'myLibrary'
	});
