/**
 * JS String Search
 *
 * String indexOf()
 * String lastIndexOf()
 * String startsWith()
 * String endsWith()
 */

/**
 * JavaScript String indexOf()
 *
 * The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
 */
{
	let str = "Please locate where 'locate' occurs!";
	// console.log(str.indexOf("locate"));
}

/**
 * JavaScript String lastIndexOf()
 * The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
 */
{
	let str = "Please locate where 'locate' occurs!";
	// console.log(str.lastIndexOf("locate"));
}

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
{
	let str = "Please locate where 'locate' occurs!";
	// console.log(str.lastIndexOf("John"));
}

/**
 * Both methods accept a second parameter as the starting position for the search:
 */
{
	let str = "Please locate where 'locate' occurs!";
	// console.log(str.indexOf("locate", 15));
	// console.log(str.lastIndexOf("locate", 15));
}

/**
 * JavaScript String search()
 * The search() method searches a string for a specified value and returns the position of the match:
 */
{
	let str = "Please locate where 'locate' occurs!";
	// console.log(str.search("locate"));
}

/**
 * Did You Notice?
 *
 * The two methods, indexOf() and search(), are equal?
 *
 * They accept the same arguments (parameters), and return the same value?
 *
 * The two methods are NOT equal. These are the differences:
 * The search() method cannot take a second start position argument.
 * The indexOf() method cannot take powerful search values (regular expressions).
 */

/**
 * JavaScript String match()
 */
{
	let text = "The rain in SPAIN stays mainly in the plain";
	// console.log(text.match(/ain/g));
}

/**
 * JavaScript String includes()
 *
 * The includes() method returns true if a string contains a specified value.
 */

{
	let text = "Hello world, welcome to the universe.";
	// console.log(text.includes("world"));
	// console.log(text.includes("world", 12));
}

/**
 * JavaScript String startsWith()
 *
 * The startsWith() method returns true if a string begins with a specified value, otherwise false:
 */
{
	let text = "Hello world, welcome to the universe.";

	// console.log(text.startsWith("Hello"));
	// console.log(text.startsWith("world", 6));
}

/**
 * JavaScript String endsWith()
 *
 * The endsWith() method returns true if a string ends with a specified value, otherwise false:
 */
{
	let text = "John Doe";
	// console.log(text.endsWith("Doe"));
	console.log(text.endsWith("John", 4));
}
