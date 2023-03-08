/**
 * JS Function Parameters
 */

/**
 * Function Parameters and Arguments
 *
 * Earlier in this tutorial, you learned that functions can have parameters:
 */
{
	function functionName(parameter1, parameter2, parameter3) {
		// code to be executed
	}

	//   Function parameters are the names listed in the function definition.
	// Function arguments are the real values passed to (and received by) the function.
}

/**
 * Default Parameters
 *
 * If a function is called with missing arguments (less than declared), the missing values are set to undefined.
 * Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
 */
{
	function myFunction(x, y) {
		if (y === undefined) {
			y = 2;
		}
	}
}

/**
 * Default Parameter Values
 *
 * ES6 allows function parameters to have default values.
 */
{
	function myFunction(x, y = 10) {
		return x + y;
	}
	myFunction(5);
}

/**
 * Function Rest Parameter
 *
 * The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
 */
{
	function sum(...args) {
		let sum = 0;
		for (let arg of args) sum += arg;
		return sum;
	}

	let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
}

/**
 * The Arguments Object
 *
 * JavaScript functions have a built-in object called the arguments object.
 * The argument object contains an array of the arguments used when the function was called (invoked).
 * This way you can simply use a function to find (for instance) the highest value in a list of numbers:
 */
{
	x = findMax(1, 123, 500, 115, 44, 88);

	function findMax() {
		let max = -Infinity;
		for (let i = 0; i < arguments.length; i++) {
			if (arguments[i] > max) {
				max = arguments[i];
			}
		}
		return max;
	}

	// Or create a function to sum all input values:

	x = sumAll(1, 123, 500, 115, 44, 88);

	function sumAll() {
		let sum = 0;
		for (let i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
	}
}

/**
 * Arguments are Passed by Value
 */

/**
 * Objects are Passed by Reference
 */
