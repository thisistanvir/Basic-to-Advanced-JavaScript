/**
 * JS Math Object
 *
 * Pi
 */
{
	// console.log(Math.PI);
}

/**
 * Math Properties (Constants)
 *
 * The syntax for any Math property is : Math.property.
 */
//  Math.E        // returns Euler's number
//  Math.PI       // returns PI
//  Math.SQRT2    // returns the square root of 2
//  Math.SQRT1_2  // returns the square root of 1/2
//  Math.LN2      // returns the natural logarithm of 2
//  Math.LN10     // returns the natural logarithm of 10
//  Math.LOG2E    // returns base 2 logarithm of E
//  Math.LOG10E   // returns base 10 logarithm of E

/**
 * Math.round()
 * Math.round(x) returns the nearest integer:
 * */
{
	Math.round(4.6); // 5
	Math.round(4.4); // 4
}

/**
 * Math.ceil()
 *
 * Math.ceil(x) returns the value of x rounded up to its nearest integer:
 */
{
	Math.ceil(4.9); // 5
	Math.ceil(4.7); // 5
	Math.ceil(4.4); // 5
	Math.ceil(4.2); // 5
	Math.ceil(-4.2); // -4
}

/**
 * Math.floor()
 *
 * Math.floor(x) returns the value of x rounded down to its nearest integer:
 */
{
	Math.floor(4.9); // 4
	Math.floor(4.7); // 4
	Math.floor(4.4); // 4
	Math.floor(4.2); // 4
	Math.floor(-4.2); // -5
}

/**
 * Math.trunc()
 *
 * Math.trunc(x) returns the integer part of x:
 */
{
	Math.trunc(4.9); // 4
	Math.trunc(4.7); // 4
	Math.trunc(4.4); // 4
	Math.trunc(4.2); // 4
	Math.trunc(-4.2); // -4
}

/**
 * Math.sign()
 *
 * Math.sign(x) returns if x is negative, null or positive:
 */
{
	Math.sign(-4); // -1
	Math.sign(0); // 0
	Math.sign(4); // 1
}

/**
 * Math.pow()
 *
 * Math.pow(x, y) returns the value of x to the power of y:
 */
{
	Math.pow(8, 2); // 64
}

/**
 * Math.sqrt()
 *
 * Math.sqrt(x) returns the square root of x:
 */
{
	Math.sqrt(64); // 8
}

/**
 * Math.abs()
 *
 * Math.abs(x) returns the absolute (positive) value of x:
 */
{
	Math.abs(-4.7); // 4.7
}

/**
 * Math.min() and Math.max()
 *
 * Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
 */
{
	Math.min(0, 150, 30, 20, -8, -200); // -200

	Math.max(0, 150, 30, 20, -8, -200); // 150
}

/**
 * The Math.log() Method
 */
{
	Math.log(1);
	Math.log2(8);
	Math.log10(1000);
}

/**
 * JavaScript Random
 *
 * Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
 */
{
	// Returns a random number:
	Math.random();
}

{
	// Returns a random integer from 0 to 9:
	Math.floor(Math.random() * 10);
}

{
	// Returns a random integer from 0 to 10:
	Math.floor(Math.random() * 11);
}

/**
 * Random Function
 *
 * This JavaScript function always returns a random number between min (included) and max (excluded):
 */
{
	function getRandInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
}

// This JavaScript function always returns a random number between min and max (both included):
{
	function getRandInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
