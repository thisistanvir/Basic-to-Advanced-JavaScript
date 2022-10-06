/**
 * JS Hoisting
 *
 *Hoisting is JavaScript's default behavior of moving declarations to the top.
 */
{
	x = 5; // Assign 5 to x

	elem = document.getElementById("demo"); // Find an element
	elem.innerHTML = x; // Display x in the element

	var x; // Declare x
}
{
	var x; // Declare x
	x = 5; // Assign 5 to x

	elem = document.getElementById("demo"); // Find an element
	elem.innerHTML = x;
}

/**
 * The let and const Keywords
 *
 * Variables defined with let and const are hoisted to the top of the block, but not initialized.
 * Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
 * Using a let variable before it is declared will result in a ReferenceError.
 */
{
	carName = "Volvo";
	let carName;
}

// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.
{
  carName = "Volvo";
const carName;
}


// JavaScript Initializations are Not Hoisted
var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y
