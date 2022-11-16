/**
 * JS Display Objects
 */
{
	// Displaying a JavaScript object will output [object Object].
	const person = {
		name: "John",
		age: 30,
		city: "New York",
	};

	// document.getElementById("demo").innerHTML = person;
}

// Displaying Object Properties
{
	const person = {
		name: "John",
		age: 30,
		city: "New York",
	};

	// document.getElementById("demo").innerHTML =
	// 	person.name + "," + person.age + "," + person.city;
}

// Displaying the Object in a Loop
{
	const person = {
		name: "John",
		age: 30,
		city: "New York",
	};

	let txt = "";
	for (let x in person) {
		txt += person[x] + " ";
	}

	// document.getElementById("demo").innerHTML = txt;
}

// Using Object.values()
{
	const person = {
		name: "John",
		age: 30,
		city: "New York",
	};

	const myArray = Object.values(person);
	// document.getElementById("demo").innerHTML = myArray;
}

// Using JSON.stringify()
{
	const person = {
		name: "John",
		age: 30,
		city: "New York",
	};

	let myString = JSON.stringify(person);
	// document.getElementById("demo").innerHTML = myString;
}

// Stringify Dates
// JSON.stringify converts dates into strings:
{
	const person = {
		name: "John",
		today: new Date(),
	};

	let myString = JSON.stringify(person);
	// document.getElementById("demo").innerHTML = myString;
}

// Stringify Functions
// JSON.stringify will not stringify functions:
{
	const person = {
		name: "John",
		age: function () {
			return 30;
		},
	};

	let myString = JSON.stringify(person);
	// document.getElementById("demo").innerHTML = myString;
}

// This can be "fixed" if you convert the functions into strings before stringifying.
{
	const person = {
		name: "John",
		age: function () {
			return 30;
		},
	};
	person.age = person.age.toString();

	let myString = JSON.stringify(person);
	// document.getElementById("demo").innerHTML = myString;
}

// Stringify Arrays
{
	const arr = ["John", "Peter", "Sally", "Jane"];

	let myString = JSON.stringify(arr);
	document.getElementById("demo").innerHTML = myString;
}
