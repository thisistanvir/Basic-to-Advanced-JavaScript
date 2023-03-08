/**
 * JS Sorting Arrays
 *
 * The sort() method sorts an array alphabetically:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	// console.log(fruits.sort());
}

/**
 * Reversing an Array
 *
 * The reverse() method reverses the elements in an array.
 * You can use it to sort an array in descending order:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.sort();
	fruits.reverse();
}

/**
 * Numeric Sort
 *
 * By default, the sort() function sorts values as strings.
 * This works well for strings ("Apple" comes before "Banana").
 * However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
 * Because of this, the sort() method will produce incorrect result when sorting numbers.
 * You can fix this by providing a compare function:
 */
{
	const points = [40, 100, 1, 5, 25, 10];
	let sort = points.sort(function (a, b) {
		return a - b;
	});
	// console.log(sort);
}

// Use the same trick to sort an array descending:
{
	const points = [40, 100, 1, 5, 25, 10];
	points.sort(function (a, b) {
		return b - a;
	});
}

/**
 * Sorting an Array in Random Order
 */
{
	const points = [40, 100, 1, 5, 25, 10];
	let randomSort = points.sort(function () {
		return 0.5 - Math.random();
	});
	// console.log(randomSort);
}

/**
 * Find the Highest (or Lowest) Array Value
 *
 * There are no built-in functions for finding the max or min value in an array.
 * However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
 * Sorting ascending:
 */
{
	const points = [40, 100, 1, 5, 25, 10];
	points.sort(function (a, b) {
		return a - b;
	});
	// now points[0] contains the lowest value
	// and points[points.length-1] contains the highest value
}

/**
 * Using Math.max() on an Array
 *
 * You can use Math.max.apply to find the highest number in an array:
 */
{
	const points = [40, 100, 1, 5, 25, 10];

	function myArrayMax(arr) {
		return Math.max.apply(null, arr);
	}
	// console.log(myArrayMax(points));
}

/**
 * Using Math.min() on an Array
 *
 * You can use Math.min.apply to find the lowest number in an array:
 */
{
	const points = [40, 100, 1, 5, 25, 10];

	function myArrayMin(arr) {
		return Math.min.apply(null, arr);
	}
	// console.log(myArrayMin(points));
}

/**
 * Sorting Object Arrays
 *
 * JavaScript arrays often contain objects:
 */
{
	const cars = [
		{ type: "Volvo", year: 2016 },
		{ type: "Saab", year: 2001 },
		{ type: "BMW", year: 2010 },
	];

	let sort = cars.sort(function (a, b) {
		return a.year - b.year;
	});
	// console.log(sort);
}

// Comparing string properties is a little more complex:
{
	const cars = [
		{ type: "Volvo", year: 2016 },
		{ type: "Saab", year: 2001 },
		{ type: "BMW", year: 2010 },
	];

	let sort = cars.sort(function (a, b) {
		let x = a.type.toLowerCase();
		let y = b.type.toLowerCase();
		if (x < y) {
			return -1;
		}
		if (x > y) {
			return 1;
		}
		return 0;
	});

	// console.log(sort);
}
