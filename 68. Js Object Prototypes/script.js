/**
 * JS Object Prototypes
 *
 * All JavaScript objects inherit properties and methods from a prototype.
 * In the previous chapter we learned how to use an object constructor:
 */

/**
 * Adding Properties and Methods to Objects
 *
 * Using the prototype Property
 */
{
	function Person(first, last, age, eyecolor) {
		this.firstName = first;
		this.lastName = last;
		this.age = age;
		this.eyeColor = eyecolor;
	}

	Person.prototype.nationality = "English";
}

// The JavaScript prototype property also allows you to add new methods to objects constructors:
{
	function Person(first, last, age, eyecolor) {
		this.firstName = first;
		this.lastName = last;
		this.age = age;
		this.eyeColor = eyecolor;
	}

	Person.prototype.name = function () {
		return this.firstName + " " + this.lastName;
	};
}
