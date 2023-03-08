/**
 * JS Sets
 *
 * A JavaScript Set is a collection of unique values.
 * Each value can only occur once in a Set.
 */

// Create a Set
const letters = new Set(["a", "b", "c"]);

// Add Values to the Set
letters.add("d");

// The forEach() Method
// letters.forEach(function (value) {
// 	console.log("The value is " + value);
// });

// The values() Method
// letters.values();

for (let x of letters.values()) {
	console.log("The value is " + x);
}
