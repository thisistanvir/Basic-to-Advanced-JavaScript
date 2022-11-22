/**
 * Js Closures
 *
 * JavaScript variables can belong to the local or global scope.
 * Global variables can be made local (private) with closures.
 *
 */
// A function can access all variables defined inside the function, like this:
{
	function myFunction() {
		let a = 4;
		return a * a;
	}
}

// But a function can also access variables defined outside the function, like this:
{
	let a = 4;
	function myFunction() {
		return a * a;
	}
}

/**
 * A Counter Dilemma
 *
 * You could use a global variable, and a function to increase the counter:
 */
{
	// Initiate counter
	let counter = 0;

	// Function to increment counter
	function add() {
		counter += 1;
	}

	// Call add() 3 times
	// console.log(add());
	// console.log(add());
	// console.log(add());

	// The counter should now be 3
}

// There is a problem with the solution above: Any code on the page can change the counter, without calling add().

// The counter should be local to the add() function, to prevent other code from changing it:

{
	// Initiate counter
	let counter = 0;

	// Function to increment counter
	function add() {
		let counter = 0;
		counter += 1;
	}

	// Call add() 3 times
	// console.log(add());
	// console.log(add());
	// console.log(add());

	//The counter should now be 3. But it is 0
}

// It did not work because we display the global counter instead of the local counter.

// We can remove the global counter and access the local counter by letting the function return it:
{
	// Function to increment counter
	function add() {
		let counter = 0;
		counter += 1;
		return counter;
	}

	// Call add() 3 times
	// console.log(add());
	// console.log(add());
	// console.log(add());

	//The counter should now be 3. But it is 1.
}

// It did not work because we reset the local counter every time we call the function.

/**
 * JavaScript Nested Functions
 * 
All functions have access to the global scope.  

In fact, in JavaScript, all functions have access to the scope "above" them.

JavaScript supports nested functions. Nested functions have access to the scope "above" them.

In this example, the inner function plus() has access to the counter variable in the parent function:
 */
{
	function add() {
		let counter = 0;
		function plus() {
			counter += 1;
		}
		plus();
		return counter;
	}
	// console.log(add());
}

// This could have solved the counter dilemma, if we could reach the plus() function from the outside.

// We also need to find a way to execute counter = 0 only once.

/**
 * JavaScript Closures
 */
{
	const add = (function () {
		let counter = 0;
		return function () {
			counter += 1;
			return counter;
		};
	})();

	console.log(add());
	console.log(add());
	console.log(add());

	// the counter is now 3
}
