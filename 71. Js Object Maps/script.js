/**
 * JS Object Maps
 *
 * A Map holds key-value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys.
 * A Map has a property that represents the size of the map.
 */

/**
 * How to Create a Map
 *
 * You can create a JavaScript Map by:
 *
 * Passing an Array to new Map()
 * Create a Map and use Map.set()
 */
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);
}

{
	// Create a Map
	const fruits = new Map();

	// Set Map Values
	fruits.set("apples", 500);
	fruits.set("bananas", 300);
	fruits.set("oranges", 200);
}

// Map.get()
// The get() method gets the value of a key in a Map:
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	fruits.get("apples"); // Returns 500
}

// Map.size
// The size property returns the number of elements in a Map:
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	fruits.size;
}

// Map.delete()
// The delete() method removes a Map element:
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	fruits.delete("apples");
}

// Map.clear()
// The clear() method removes all the elements from a Map:
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	fruits.clear();
}

// Map.has()
// The has() method returns true if a key exists in a Map:
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	fruits.has("apples");
}

// Maps are Objects
// typeof returns object:
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	// Returns object:
	typeof fruits;

	// instanceof Map returns true:
	// Returns true:
	fruits instanceof Map;
}

/**
 * Map.forEach()
 *
 * The forEach() method invokes a callback for each key/value pair in a Map:
 */
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	// List all entries
	fruits.forEach(function (value, key) {
		let text = key + " = " + value;
		// console.log(text);
	});
}

/**
 * Map.entries()
 *
 * The entries() method returns an iterator object with the [key,values] in a Map:
 */
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	// List all entries
	for (const x of fruits.entries()) {
		// console.log(x);
	}
}

/**
 * Map.keys()
 *
 * The keys() method returns an iterator object with the keys in a Map:
 */
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	// List all keys
	for (const x of fruits.keys()) {
		// console.log(x);
	}
}

/**
 * Map.values()
 *
 * The values() method returns an iterator object with the values in a Map:
 */
{
	// Create a Map
	const fruits = new Map([
		["apples", 500],
		["bananas", 300],
		["oranges", 200],
	]);

	// List all values
	for (const x of fruits.values()) {
		// console.log(x);
	}

	// Sum all values
	let total = 0;
	for (const x of fruits.values()) {
		total += x;
	}
	// console.log(total);
}

/**
 * Objects as Keys
 *
 * Being able to use objects as keys is an important Map feature.
 */
{
	// Create Objects
	const apples = { name: "Apples" };
	const bananas = { name: "Bananas" };
	const oranges = { name: "Oranges" };

	// Create a Map
	const fruits = new Map();

	// Add new Elements to the Map
	fruits.set(apples, 500);
	fruits.set(bananas, 300);
	fruits.set(oranges, 200);

	console.log(fruits.get("apples")); // Returns undefined
	console.log(fruits.get(apples)); // Returns 500
}
