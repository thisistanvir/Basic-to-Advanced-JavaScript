/**
 * JS Arrays
 *
 * An array is a special variable, which can hold more than one value:
 */
{
	const cars = ["Saab", "Volvo", "BMW"];
}
{
	const cars = [];
	cars[0] = "Saab";
	cars[1] = "Volvo";
	cars[2] = "BMW";
}

/**
 * Accessing Array Elements
 *
 * You access an array element by referring to the index number:
 */
{
	const cars = ["Saab", "Volvo", "BMW"];
	let car = cars[0];
}

/**
 * Access the Full Array
 * With JavaScript, the full array can be accessed by referring to the array name:
 */
{
	const cars = ["Saab", "Volvo", "BMW"];
	document.getElementById("demo").innerHTML = cars;
}

/**
 * The length Property
 *
 * The length property of an array returns the length of an array (the number of array elements).
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let length = fruits.length;
}

/**
 * Accessing the Last Array Element
 */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

/**
 * Looping Array Elements
 *
 * One way to loop through an array, is using a for loop:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let fLen = fruits.length;

	let text = "<ul>";
	for (let i = 0; i < fLen; i++) {
		text += "<li>" + fruits[i] + "</li>";
	}
	text += "</ul>";
}
// You can also use the Array.forEach() function:
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];

	let text = "<ul>";
	fruits.forEach(myFunction);
	text += "</ul>";

	function myFunction(value) {
		text += "<li>" + value + "</li>";
	}
}

/**
 * Adding Array Elements
 *
 * The easiest way to add a new element to an array is using the push() method:
 */
{
	const fruits = ["Banana", "Orange", "Apple"];
	fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
}

// New element can also be added to an array using the length property:
{
	const fruits = ["Banana", "Orange", "Apple"];
	fruits[fruits.length] = "Lemon"; // Adds "Lemon" to fruits
}

/**
 * How to Recognize an Array
 *
 * A common question is: How do I know if a variable is an array?
 * The problem is that the JavaScript operator typeof returns "object":
 */
{
	const fruits = ["Banana", "Orange", "Apple"];
	let type = typeof fruits;

	// Solution 1:
	Array.isArray(fruits);

	// Solution 2:
	fruits instanceof Array;
}
