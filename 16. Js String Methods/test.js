/**
 * JS String Methods and Properties
 *
 */

// JavaScript String Length
{
	let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// console.log(txt.length);
}

/**
 * Extracting String Parts
 *
 * There are 3 methods for extracting a part of a string:
 * slice(start, end)
 * substring(start, end)
 * substr(start, length)
 */

// JavaScript String slice()
{
	let str = "Apple, Banana, Kiwi";
	// let part = str.slice(7, 13);
	// let part = str.slice(-12, -6);
	// let part = str.slice(7);
	let part = str.slice(-12);
	// console.log(part);
}

// JavaScript String substring()
// The difference is that start and end values less than 0 are treated as 0 in substring().
{
	let str = "Apple, Banana, Kiwi";
	let part = str.substring(7, 13);
	// console.log(part);
}

// JavaScript String substr()
// The difference is that the second parameter specifies the length of the extracted part.
{
	let str = "Apple, Banana, Kiwi";
	let part = str.substr(7, 6);
	// console.log(part);
}

// Replacing String Content
{
	// let text = "Please visit Microsoft!";
	// let newText = text.replace("Microsoft", "W3Schools");
	// console.log(newText);

	// By default, the replace() method replaces only the first match:
	let text = "Please visit Microsoft and Microsoft!";
	let newText = text.replace("Microsoft", "W3Schools");
	// console.log(newText);
}

// Converting to Upper and Lower Case
{
	let text1 = "Hello World!";
	let text2 = text1.toUpperCase();
	let text3 = text1.toLowerCase();
	// console.log(text2);
	// console.log(text3);
}

// JavaScript String concat()
{
	let text1 = "Hello";
	let text2 = "World";
	let text3 = text1.concat(" ", text2);
	// console.log(text3);
}

// JavaScript String trim()
{
	let text1 = "      Hello World!      ";
	let text2 = text1.trim();
	// console.log(text2);
}

// Extracting String Characters
{
	let text = "HELLO WORLD";
	let char = text.charAt(0);
	let char2 = text.charCodeAt(0);
	// console.log(char);
	// console.log(char2);
}

// JavaScript String split()
{
	let text = "hello world";
	let text2 = text.split("");
	console.log(text.split(""));
}
