/**
 * JS Array Iteration
 *
 * JavaScript Array forEach()
 * The forEach() method calls a function (a callback function) once for each array element. *
 */
{
	const numbers = [45, 4, 9, 16, 25];

	function myFunction(value, index, array) {
		console.log(value * 2);
	}

	// numbers.forEach(myFunction);
}

/**
 * JavaScript Array map()
 *
 * The map() method creates a new array by performing a function on each array element.
 * The map() method does not execute the function for array elements without values.
 * The map() method does not change the original array.
 * This example multiplies each array value by 2:
 */
{
	const numbers = [45, 4, 9, 16, 25];

	function myFunction(value, index, array) {
		return value * 2;
	}

	let newNumbers = numbers.map(myFunction);
	// console.log(newNumbers);
}

/**
 * JavaScript Array filter()
 *
 * The filter() method creates a new array with array elements that passes a test.
 * This example creates a new array from elements with a value larger than 18:
 */
{
	const numbers = [45, 4, 9, 16, 25];

	function myFunction(value, index, array) {
		return value > 18;
	}

	let newNumbers = numbers.filter(myFunction);
	// console.log(newNumbers);
}

/**
 * JavaScript Array reduce()
 *
 * The reduce() method runs a function on each array element to produce (reduce it to) a single value.
 * The reduce() method works from left-to-right in the array. See also reduceRight().
 * The reduce() method does not reduce the original array.
 */
{
	const numbers = [45, 4, 9, 16, 25];

	function myFunction(total, value, index, array) {
		return total + value;
	}

	let newNumbers = numbers.reduce(myFunction, 10);
	// console.log(newNumbers);
}

/**
 * JavaScript Array reduceRight()
 *
 * The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
 * The reduceRight() works from right-to-left in the array. See also reduce().
 * The reduceRight() method does not reduce the original array.
 */
{
	const numbers = [45, 4, 9, 16, 25];

	function myFunction(total, value, index, array) {
		return total + value;
	}

	let newNumbers = numbers.reduceRight(myFunction, 10);
	// console.log(newNumbers);
}

/**
 * JavaScript Array every()
 *
 * The every() method check if all array values pass a test.
 * This example check if all array values are larger than 18:
 */
{
	const numbers = [45, 4, 9, 16, 25];

	function myFunction(value, index, array) {
		return value > 18;
	}

	let newNumber = numbers.every(myFunction, 10);
	// console.log(newNumber);
}

/**
 * JavaScript Array some()
 *
 * The some() method check if some array values pass a test.
 * This example check if some array values are larger than 18:
 */
{
	const numbers = [45, 4, 9, 16, 25];

	function myFunction(value, index, array) {
		return value > 18;
	}

	let newNumber = numbers.some(myFunction, 10);
	// console.log(newNumber);
}

/**
 * JavaScript Array indexOf()
 *
 * The indexOf() method searches an array for an element value and returns its position.
 * Note: The first item has position 0, the second item has position 1, and so on.
 */
{
	const fruits = ["Apple", "Orange", "Apple", "Mango"];
	let position = fruits.indexOf("Apple") + 1;
	// console.log(position);
}

// lastIndexOf
{
	const fruits = ["Apple", "Orange", "Apple", "Mango"];
	let position = fruits.lastIndexOf("Apple") + 1;
	// console.log(position);
}

/**
 * JavaScript Array find()
 *
 * The find() method returns the value of the first array element that passes a test function.
 * This example finds (returns the value of) the first element that is larger than 18:
 */
{
	const numbers = [4, 9, 16, 25, 29];

	function myFunction(value, index, array) {
		return value > 18;
	}

	let newNumber = numbers.find(myFunction);
	// console.log(newNumber);
}

// JavaScript Array findIndex()
{
	const numbers = [4, 9, 16, 25, 29];

	function myFunction(value, index, array) {
		return value > 18;
	}

	let newNumber = numbers.findIndex(myFunction);
	// console.log(newNumber);
}

/**
 * JavaScript Array.from()
 *
 * The Array.from() method returns an Array object from any object with a length property or any iterable object.
 */
{
	// console.log(Array.from("ABCDEFG"));
}
