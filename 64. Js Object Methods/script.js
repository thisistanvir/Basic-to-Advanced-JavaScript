/**
 * JS Object Methods
 */
const person = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

// Accessing Object Methods
// objectName.methodName()
{
	let name = person.fullName();
}

// If you access the fullName property, without (), it will return the function definition:
{
	let name = person.fullName;
}

/**
 * Adding a Method to an Object
 */
{
	person.name = function () {
		return this.firstName + " " + this.lastName;
	};
}

/**
 * Using Built-In Methods
 */
{
	person.name = function () {
		return (this.firstName + " " + this.lastName).toUpperCase();
	};
}
