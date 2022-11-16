/**
 * JS Object Iterables
 *
 * Iterable objects are objects that can be iterated over with for..of.
 * Technically, iterables must implement the Symbol.iterator method.
 */

/**
 * Iterating Over a String
 * You can use a for..of loop to iterate over the elements of a string:
 */
{
	let text = "W3Schools";
	for (const x of text) {
		// console.log(x);
	}
}

/**
 * Iterating Over an Array
 * You can use a for..of loop to iterate over the elements of an Array:
 */
{
	let num = [1, 2, 3, 4, 5];
	for (const x of num) {
		// console.log(x);
	}
}

/**
 * JavaScript Iterators
 *
 * The iterator protocol defines how to produce a sequence of values from an object.
 * An object becomes an iterator when it implements a next() method.
 * The next() method must return an object with two properties:
 *    value (the next value)
 *    done (true or false)
 */

// Home Made Iterable
{
	// Home Made Iterable
	function myNumbers() {
		let n = 0;
		return {
			next: function () {
				n += 10;
				return { value: n, done: false };
			},
		};
	}

	// Create Iterable
	const n = myNumbers();

	// console.log(n.next().value);
	// console.log(n.next().value);
}

// Object Iterable
{
	const myObject = {};

	myObject[Symbol.iterator] = function () {
		let n = 0;
		let done = false;
		return {
			next() {
				n += 10;
				if (n == 100) {
					done = true;
				}
				return {
					value: n,
					done: done,
				};
			},
		};
	};

	for (const obj of myObject) {
		console.log(obj);
	}
}
