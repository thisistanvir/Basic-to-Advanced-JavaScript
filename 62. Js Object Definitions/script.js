/**
 * JavaScript Primitives
 * 
 string
number
boolean
null
undefined
symbol
bigint
 */

/**
 *
 * Immutable
 *
 * Primitive values are immutable (they are hardcoded and cannot be changed).
 * if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
 */

/**
 * Using an Object Literal
 *
 * Spaces and line breaks are not important. An object definition can span multiple lines:
 */
{
	const person = {
		firstName: "John",
		lastName: "Doe",
		age: 50,
		eyeColor: "blue",
	};
}
{
	const person = {};
	person.firstName = "John";
	person.lastName = "Doe";
	person.age = 50;
	person.eyeColor = "blue";
}

/**
 * Using the JavaScript Keyword new
 *
 * he following example create a new JavaScript object using new Object(), and then adds 4 properties:
 */
{
	const person = new Object();
	person.firstName = "John";
	person.lastName = "Doe";
	person.age = 50;
	person.eyeColor = "blue";
}

/**
 * JavaScript Objects are Mutable
 *
 * The object x is not a copy of person. It is person. Both x and person are the same object.
 * Any changes to x will also change person, because x and person are the same object.
 */

{
	const person = {
		firstName: "John",
		lastName: "Doe",
		age: 50,
		eyeColor: "blue",
	};

	const x = person;
	x.age = 10; // Will change both x.age and person.age
}
