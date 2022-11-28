/**
 * JS Callbacks
 *
 */

// Function Sequence
{
	function myFirst() {
		myDisplayer("Hello");
	}

	function mySecond() {
		myDisplayer("Goodbye");
	}

	myFirst();
	mySecond();
}

/**
 * Sequence Control
 *
 * Sometimes you would like to have better control over when to execute a function.
 * Suppose you want to do a calculation, and then display the result.
 * You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
 */
{
	function myDisplayer(some) {
		console.log(some);
	}

	function myCalculator(num1, num2) {
		let sum = num1 + num2;
		return sum;
	}

	let result = myCalculator(5, 5);
	myDisplayer(result);
}

// Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):
{
	function myDisplayer(some) {
		console.log(some);
	}

	function myCalculator(num1, num2) {
		let sum = num1 + num2;
		myDisplayer(sum);
	}

	myCalculator(5, 5);
}

/**
 * JavaScript Callbacks
 *
 * A callback is a function passed as an argument to another function.
 *
 * Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
 */
{
	function myDisplayer(some) {
		console.log(some);
	}

	function myCalculator(num1, num2, myCallback) {
		let sum = num1 + num2;
		myCallback(sum);
	}

	myCalculator(5, 5, myDisplayer);
}
