/**
 * JS Object Constructors
 */
function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.fullName = function () {
		return this.firstName + " " + this.lastName;
	};
}

const tanvir = new Person("tanvir", "ahamed", "29");
const mousumi = new Person("mousumi", "ahamed", "27");

// console.log(mousumi.fullName());

// Adding a Property to an Object
tanvir.nationality = "Bangladesh";
// console.log(tanvir.nationality);

// Adding a Method to an Object
{
	fullName.mousumi = function () {
		return this.firstName + " " + this.lastName;
	};
}

/**
 * Adding a Property to a Constructor
 *
 * You cannot add a new property to an object constructor the same way you add a new property to an existing object:
 *
 * To add a new property to a constructor, you must add it to the constructor function:
 */
{
	Person.nationality = "English";

	function Person(first, last, age, eyecolor) {
		this.firstName = first;
		this.lastName = last;
		this.age = age;
		this.eyeColor = eyecolor;
		this.nationality = "English";
	}
}
