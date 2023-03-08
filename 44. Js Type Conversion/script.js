/**
 * JS Type Conversion
 * 
 Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
 */

// Converting Strings to Numbers

Number("3.14"); // 3.14
Number(Math.PI); // 3.141592653589793
Number(" "); // 0
Number(""); // 0
Number("99 88"); // NaN
Number("John"); // NaN
/**
 * Number()	Returns a number, converted from its argument
 * parseFloat()	Parses a string and returns a floating point number
 * parseInt()	Parses a string and returns an integer
 */

// The Unary + Operator

{
	let y = "5"; // y is a string
	let x = +y; // x is a number
}
{
	let y = "John"; // y is a string
	let x = +y; // x is a number (NaN)
}

// Converting Numbers to Strings

/**
 * toExponential()	Returns a string, with a number rounded and written using exponential notation.
 * toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
 * toPrecision()	Returns a string, with a number written with a specified length
 */
{
	String(x); // returns a string from a number variable x
	String(123); // returns a string from a number literal 123
	String(100 + 23); // returns a string from a number from an expression
}

{
	x.toString()(123)
		.toString()(100 + 23)
		.toString();
}

//Converting Dates to Numbers
{
	d = new Date();
	Number(d); // returns 1404568027739
}
{
	d = new Date();
	d.getTime(); // returns 1404568027739
}

// Converting Dates to Strings
String(Date()); // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
Date().toString(); // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

// Converting Booleans to Numbers
Number(false); // returns 0
Number(true); // returns 1

// Converting Booleans to Strings
String(false); // returns "false"
String(true); // returns "true"

false.toString(); // returns "false"
true.toString(); // returns "true"

// Automatic Type Conversion
5 + null; // returns 5         because null is converted to 0
"5" + null; // returns "5null"   because null is converted to "null"
"5" + 2; // returns "52"      because 2 is converted to "2"
"5" - 2; // returns 3         because "5" is converted to 5
"5" * "2"; // returns 10        because "5" and "2" are converted to 5 and 2

// Automatic String Conversion
document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
