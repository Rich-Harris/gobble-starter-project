import d3 from 'd3';
import { foo } from './foo';

export function doSomething () {
	console.log( `the answer is ${foo()}` );
}

export function doSomethingElse () {
	d3.select( 'body' )
		.append( 'p' )
		.html( 'it works! check the console, and refresh the page - you should see sourcemapped source code' );
}
