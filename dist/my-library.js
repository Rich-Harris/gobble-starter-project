(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3')) :
	typeof define === 'function' && define.amd ? define(['exports', 'd3'], factory) :
	factory((global.myLibrary = {}), global.d3)
}(this, function (exports, d3) { 'use strict';

	d3 = ('default' in d3 ? d3['default'] : d3);

	var answer = 42;

	function foo() {
		return answer;
	}

	function doSomething() {
		console.log('the answer is ' + foo());
	}

	function doSomethingElse() {
		d3.select('body').append('p').html('it works!');
	}

	exports.doSomething = doSomething;
	exports.doSomethingElse = doSomethingElse;

}));
//# sourceMappingURL=my-library.js.map
