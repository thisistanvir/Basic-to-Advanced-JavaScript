/**
 * JS Number Methods
 *
 * The toString() Method
 * The toString() method returns a number as a string.
 * All number methods can be used on any type of numbers (literals, variables, or expressions):
 */
{
	let x = 123;
	x.toString();
	(123).toString();
	(100 + 23).toString();
}

/**
 * The toExponential() Method
 *
 * toExponential() returns a string, with a number rounded and written using exponential notation.
 * A parameter defines the number of characters behind the decimal point:
 */
{
	let x = 9.656;
	// console.log(x.toExponential(2)); // 9.66e+0
	// console.log(x.toExponential(4)); // 9.6560e+0
	// console.log(x.toExponential(6)); // 9.656000e+0
}

/**
 * The toFixed() Method
 *
 * toFixed() returns a string, with the number written with a specified number of decimals:
 */
{
	let x = 9.656;
	x.toFixed(0); // 10
	x.toFixed(2); // 9.66
	x.toFixed(4); // 9.6560
	x.toFixed(6); // 9.656000
}

/**
 * The toPrecision() Method
 *
 * toPrecision() returns a string, with a number written with a specified length:
 */
{
	let x = 9.656;
	x.toPrecision(); // 9.656
	x.toPrecision(2); // 9.7
	x.toPrecision(4); // 9.656
	x.toPrecision(6); // 9.65600
}

/**
 * The valueOf() Method
 *
 * valueOf() returns a number as a number.
 */
{
	let x = 123;
	x.valueOf();
	(123).valueOf();
	(100 + 23).valueOf();
}

/**
 * Converting Variables to Numbers
 *
 * There are 3 JavaScript methods that can be used to convert variables to numbers:
 * The Number() method
 * The parseInt() method
 * The parseFloat() method
 */

/**
 * The Number() Method
 *
 * Number() can be used to convert JavaScript variables to numbers:
 */
{
	Number(true); // 1
	Number(false); // 0
	Number("10"); // 10
	Number("  10"); // 10
	Number("10  "); // 10
	Number(" 10  "); // 10
	Number("10.33"); // 10.33
	Number("10,33"); // NaN
	Number("10 33"); // Nan
	Number("John"); // NaN
}
// Number() can also convert a date to a number.
{
	Number(new Date("1970-01-01"));
}

/**
 * The parseInt() Method
 *
 *parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
 */
{
	parseInt("-10"); // -10
	parseInt("-10.33"); // -10
	parseInt("10"); // 10
	parseInt("10.33"); // 10
	parseInt("10 20 30"); // 10
	parseInt("10 years"); // 10
	parseInt("years 10"); // NaN
}

/**
 * The parseFloat() Method
 *
 * parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
 */
{
	parseFloat("10"); // 10
	parseFloat("10.33"); // 10.33
	parseFloat("10 20 30"); // 10
	parseFloat("10 years"); // 10
	parseFloat("years 10"); // NaN
}

/**
 * Number Properties
 *
 * MAX_VALUE
 * MIN_VALUE
 * POSITIVE_INFINITY
 * NEGATIVE_INFINITY
 * NaN
 */
{
	let x = Number.MAX_VALUE;
}
{
	let x = Number.MIN_VALUE;
}
{
	let x = Number.POSITIVE_INFINITY;
}
{
	let x = Number.NEGATIVE_INFINITY;
}
{
	let x = Number.NaN;
}
