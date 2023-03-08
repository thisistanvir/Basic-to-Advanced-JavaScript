/**
 * JS Maps
 *
 * A Map holds key-value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys.
 */

// Create a Map
const fruits = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);

// The set() Method
fruits.set("mango", 100);

// The get() Method
console.log(fruits.get("apples"));

// The size Property
console.log(fruits.size);

// The delete() Method
fruits.delete("apples");

// The has() Method
console.log(fruits.has("apples"));

// The forEach() Method
fruits.forEach(function (value, key) {
	// console.log("Key = " + key + " Value = " + value);
});

// The entries() Method
// fruits.entries()

for (let x of fruits.entries()) {
	console.log(x);
}
