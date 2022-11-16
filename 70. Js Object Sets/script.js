/**
 * JS Sets
 *
 * A JavaScript Set is a collection of unique values.
 * Each value can only occur once in a Set.
 * A Set can hold any value of any data type.
 */
{
	// Create a Set
	const letters = new Set(["a", "b", "c"]);
}
{
	// Create a Set
	const letters = new Set();

	// Add Values to the Set
	letters.add("a");
	letters.add("b");
	letters.add("c");
}
{
	// Create Variables
	const a = "a";
	const b = "b";
	const c = "c";

	// Create a Set
	const letters = new Set();

	// Add Variables to the Set
	letters.add(a);
	letters.add(b);
	letters.add(c);
}

// If you add equal elements, only the first will be saved:
{
	// Create a Set
	const letters = new Set();

	letters.add("a");
	letters.add("b");
	letters.add("c");
	letters.add("c");
	letters.add("c");
	letters.add("c");
	letters.add("c");
	letters.add("c");
}

/**
 * The forEach() Method
 *
 * The forEach() method invokes a function for each Set element:
 */
{
	// Create a Set
	const letters = new Set(["a", "b", "c"]);

	letters.forEach(function (value) {
		// console.log(value);
	});
}

/**
 * The values() Method
 *
 * The values() method returns an Iterator object containing all the values in a Set:
 */
{
	// Create a Set
	const letters = new Set(["a", "b", "c"]);

	// Create an Iterator
	const myIterator = letters.values();

	// List all Values
	for (const entry of myIterator) {
		// console.log(entry);
	}
}

/**
 * The keys() Method
 *
 * A Set has no keys.
 * keys() returns the same as values().
 * This makes Sets compatible with Maps.
 */
{
	// Create a Set
	const letters = new Set(["a", "b", "c"]);

	letters.keys(); // Returns [object Set Iterator]
}

/**
 * The entries() Method
 *
 * A Set has no keys.
 * entries() returns [value,value] pairs instead of [key,value] pairs.
 * This makes Sets compatible with Maps:
 */
{
	// Create a Set
	const letters = new Set(["a", "b", "c"]);

	// Create an Iterator
	const myIterator = letters.entries();

	// List all Entries
	for (const entry of myIterator) {
		// console.log(entry);
	}
}

{
	// Create a Set
	const letters = new Set(["a", "b", "c"]);

	// For a Set, typeof returns object:
	console.log(typeof letters); // Returns object

	// For a Set, instanceof Set returns true:
	console.log(letters instanceof Set); // Returns true
}
