/**
 * JS For In Loop
 *
 for (key in object) {
  // code block to be executed
 }
 */
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
	console.log(person[x]);
}

// array
const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
	console.log(numbers[x]);
}
