/**
 * JS Regular Expressions
 *
 * /pattern/modifiers;
 */

/**
 * Using String Methods
 * search()
 * replace()
 */
{
	let text = "Visit W3Schools";
	let n = text.search(/w3schools/i);
}
{
	let text = "Visit Microsoft!";
	let result = text.replace(/microsoft/i, "W3Schools");
}

// Regular Expression Modifiers
/*
i	Perform case-insensitive matching	
g	Perform a global match (find all matches rather than stopping after the first match)	
m	Perform multiline matching
*/

/**
 * Using the RegExp Object
 */
// Using test()
// It searches a string for a pattern, and returns true or false, depending on the result.

{
	const pattern = /e/;
	pattern.test("The best things in life are free!");
}

// Using exec()
// It searches a string for a specified pattern, and returns the found text as an object.
{
	/e/.exec("The best things in life are free!");
}
