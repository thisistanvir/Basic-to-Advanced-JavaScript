/**
 * JavaScript Properties
 */

/**
 * Accessing JavaScript Properties
 *
 *
 */
{
	objectName.property; // person.age
	objectName["property"]; // person["age"]
	objectName[expression]; // x = "age"; person[x]
}
// Example
{
	person.firstname + " is " + person.age + " years old.";
}
{
	person["firstname"] + " is " + person["age"] + " years old.";
}

/**
 * JavaScript for...in Loop
 *
 *
 */
const person = {
	fname: " John",
	lname: " Doe",
	age: 25,
};
{
	for (let x in person) {
		txt += person[x];
	}
}

// Adding new properties
person.nationality = "English";

// delete properties
delete person.age;

/**
 * Nested Objects
 */
{
	myObj = {
		name: "John",
		age: 30,
		cars: {
			car1: "Ford",
			car2: "BMW",
			car3: "Fiat",
		},
	};

	// example
	myObj.cars.car2;
	myObj.cars["car2"];
	myObj["cars"]["car2"];
}

/**
 * Nested Arrays and Objects
 */
{
	const myObj = {
		name: "John",
		age: 30,
		cars: [
			{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
			{ name: "BMW", models: ["320", "X3", "X5"] },
			{ name: "Fiat", models: ["500", "Panda"] },
		],
	};
}

/**
 * Prototype Properties
 *
 * JavaScript objects inherit the properties of their prototype.
 * The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.
 */
