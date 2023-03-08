/**
 * JS Errors
 *
 * Throw, and Try...Catch...Finally
 */

/**
 * JavaScript try and catch
 
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
 */
{
	<p id="demo"></p>;
	try {
		adddlert("Welcome guest!");
	} catch (err) {
		document.getElementById("demo").innerHTML = err.message;
	}
}

/**
 * JavaScript Throws Errors
 */

{
	throw "Too big"; // throw a text
	throw 500; // throw a number
}

// try catch finally throw Example

{
	let x = 5;
	try {
		if (x == "") throw "empty";
		if (isNaN(x)) throw "not a number";
		x = Number(x);
		if (x < 5) throw "too low";
		if (x > 10) throw "too high";
	} catch (err) {
		console.log(err);
	} finally {
		console.log("Text successful done");
	}
}

// Range Error
{
	let num = 1;
	try {
		num.toPrecision(500); // A number cannot have 500 significant digits
	} catch (err) {
		document.getElementById("demo").innerHTML = err.name;
	}
}

// Reference Error
{
	let x = 5;
	try {
		x = y + 1; // y cannot be used (referenced)
	} catch (err) {
		document.getElementById("demo").innerHTML = err.name;
	}
}

// Syntax Error
{
	try {
		eval("alert('Hello)"); // Missing ' will produce an error
	} catch (err) {
		document.getElementById("demo").innerHTML = err.name;
	}
}

// Type Error
{
	let num = 1;
	try {
		num.toUpperCase(); // You cannot convert a number to upper case
	} catch (err) {
		document.getElementById("demo").innerHTML = err.name;
	}
}

// URI (Uniform Resource Identifier) Error
{
	try {
		decodeURI("%%%"); // You cannot URI decode percent signs
	} catch (err) {
		document.getElementById("demo").innerHTML = err.name;
	}
}
