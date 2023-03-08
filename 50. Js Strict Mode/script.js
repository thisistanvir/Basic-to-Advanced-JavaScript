/**
 * JS Strict Mode
 *
 * "use strict"; Defines that JavaScript code should be executed in "strict mode".
 */
{
	("use strict");
	x = 3.14; // This will cause an error because x is not declared
}
{
	("use strict");
	myFunction();

	function myFunction() {
		y = 3.14; // This will also cause an error because y is not declared
	}
}

// Declared inside a function, it has local scope (only the code inside the function is in strict mode):
{
	x = 3.14; // This will not cause an error.
	myFunction();

	function myFunction() {
		"use strict";
		y = 3.14; // This will cause an error
	}
}

/**
 * Not Allowed in Strict Mode
 *
 * Using a variable, without declaring it, is not allowed:
 */
{
	("use strict");
	x = 3.14; // This will cause an error
}

// Using an object, without declaring it, is not allowed:
{
	("use strict");
	x = { p1: 10, p2: 20 }; // This will cause an error
}

// Deleting a variable (or object) is not allowed.
{
	("use strict");
	let x = 3.14;
	delete x; // This will cause an error
}

// Deleting a function is not allowed.
{
	("use strict");
	function x(p1, p2) {}
	delete x; // This will cause an error
}

// Duplicating a parameter name is not allowed:
{
	("use strict");
	function x(p1, p1) {} // This will cause an error
}

// Octal numeric literals are not allowed:
{
	("use strict");
	let x = 010; // This will cause an error
}

// Octal escape characters are not allowed:
{
	("use strict");
	let x = "\010"; // This will cause an error
}

// Writing to a read-only property is not allowed:
{
	("use strict");
	const obj = {};
	Object.defineProperty(obj, "x", { value: 0, writable: false });

	obj.x = 3.14; // This will cause an error
}

// Writing to a get-only property is not allowed:
{
	("use strict");
	const obj = {
		get x() {
			return 0;
		},
	};

	obj.x = 3.14; // This will cause an error
}

// Deleting an undeletable property is not allowed:
{
	("use strict");
	delete Object.prototype; // This will cause an error
}

// The word eval cannot be used as a variable:
{
	("use strict");
	let eval = 3.14; // This will cause an error
}

// The word arguments cannot be used as a variable:
{
	("use strict");
	let arguments = 3.14; // This will cause an error
}

// The with statement is not allowed:
{
	("use strict");
	with (Math) {
		x = cos(2);
	} // This will cause an error
}

//
