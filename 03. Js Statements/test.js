/**
 * JavaScript Statements
 *
 * JavaScript statements are composed of:
 * Values, Operators, Expressions, Keywords, and Comments.
 */
document.getElementById("demo").innerHTML = "Hello Dolly.";

/**
 * Semicolons ;
 *
 * Semicolons separate JavaScript statements.
 * Add a semicolon at the end of each executable statement:
 */
let a, b, c; // Declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

// When separated by semicolons, multiple statements on one line are allowed:
a = 5;
b = 6;
c = a + b;

/**
 * JavaScript White Space
 *
 * JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
 * The following lines are equivalent:
 */
let person = "Hege";
let person = "Hege";

// A good practice is to put spaces around operators ( = + - * / ):
let x = y + z;

/**
 * JavaScript Code Blocks
 *
 * JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
 */
function myFunction() {
	document.getElementById("demo1").innerHTML = "Hello Dolly!";
	document.getElementById("demo2").innerHTML = "How are you?";
}
