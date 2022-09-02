/**
 * JavaScript Numbers
 *
 * JavaScript has only one type of number. Numbers can be written with or without decimals.
 */
let x = 3.14; // A number with decimals
let y = 3; // A number without decimals

//  Extra large or extra small numbers can be written with scientific (exponent) notation:
{
	let x = 123e5; // 12300000
	let y = 123e-5; // 0.00123
}

/**
 * Integer Precision
 *
 * Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
 * The maximum number of decimals is 17.
 */
{
	let x = 999999999999999; // x will be 999999999999999
	let y = 9999999999999999; // y will be 10000000000000000
}

/**
 * Floating Precision
 *
 * Floating point arithmetic is not always 100% accurate:
 */
{
	let x = 0.2 + 0.1;
}

// To solve the problem above, it helps to multiply and divide:
{
	let x = (0.2 * 10 + 0.1 * 10) / 10;
}

/**
 * NaN - Not a Number
 *
 * NaN is a JavaScript reserved word indicating that a number is not a legal number.
 * Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
 * */
{
	let x = 100 / "Apple";
}
// However, if the string contains a numeric value , the result will be a number:
{
	let x = 100 / "10";
}

/**
 * NaN is a number: typeof NaN returns number:
 */
{
	typeof NaN;
}

/**
 * Infinity
 *
 * Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
 */
{
	let myNumber = 2;
	// Execute until Infinity
	while (myNumber != Infinity) {
		myNumber = myNumber * myNumber;
	}
}
// Division by 0 (zero) also generates Infinity:
{
	let x = 2 / 0;
	let y = -2 / 0;
}

/**
 * Infinity is a number: typeof Infinity returns number.
 */
{
	typeof Infinity;
}

/**
 * Decimal conversion
 */
{
	let myNumber = 32;

	console.log(myNumber.toString(10)); // decimal
	console.log(myNumber.toString(8)); // octal
	console.log(myNumber.toString(16)); // Hexadecimal
	console.log(myNumber.toString(2)); // binary
}
