/**
 * JS Function Definitions
 */

//  Function Declarations
{
	function functionName(parameters) {
		// code to be executed
	}

	// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
	function myFunction(a, b) {
		return a * b;
	}
}

/**
 * Function Expressions
 *
 * A JavaScript function can also be defined using an expression.
 * A function expression can be stored in a variable:
 */
{
	const x = function (a, b) {
		return a * b;
	};

	// After a function expression has been stored in a variable, the variable can be used as a function:
	let z = x(4, 3);

	//   The function above is actually an anonymous function (a function without a name).
	// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
}

/**
 * The Function() Constructor
 *
 * As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
 * Functions can also be defined with a built-in JavaScript function constructor called Function().
 */
{
	const myFunction = new Function("a", "b", "return a * b");

	let x = myFunction(4, 3);
}

/**
 * Function Hoisting
 *
 * Earlier in this tutorial, you learned about "hoisting" (JavaScript Hoisting).
 * Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
 * Hoisting applies to variable declarations and to function declarations.
 * Because of this, JavaScript functions can be called before they are declared:
 */
{
	myFunction(5);

	function myFunction(y) {
		return y * y;
	}
}

/**
 * Self-Invoking Functions
 */
{
	(function () {
		let x = "Hello!!"; // I will invoke myself
	})();
}

/**
 * Functions Can Be Used as Values
 *
 * JavaScript functions can be used as values:
 */
{
	function myFunction(a, b) {
		return a * b;
	}

	let x = myFunction(4, 3);

	// JavaScript functions can be used in expressions:
	let y = myFunction(4, 3) * 2;
}

/**
 * Functions are Objects
 */
{
	function myFunction(a, b) {
		return arguments.length;
	}

	// The toString() method returns the function as a string:
	let text = myFunction.toString();
}

/**
 * Arrow Functions
 *
 * Arrow functions allows a short syntax for writing function expressions.
 * You don't need the function keyword, the return keyword, and the curly brackets.
 */
{
	// ES5
	var x = function (x, y) {
		return x * y;
	};

	// ES6
	const x = (x, y) => x * y;

	// Arrow functions do not have their own this. They are not well suited for defining object methods.

	// Arrow functions are not hoisted. They must be defined before they are used.

	// Using const is safer than using var, because a function expression is always constant value.

	// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
}
