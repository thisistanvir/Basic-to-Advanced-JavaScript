/**
 * JS Object Accessors
 */

//  JavaScript Getter (The get Keyword)
// This example uses a lang property to get the value of the language property.
{
	// Create an object:
	const person = {
		firstName: "John",
		lastName: "Doe",
		language: "en",
		get lang() {
			return this.language;
		},
	};

	// console.log(person.lang);
}

// JavaScript Setter (The set Keyword)
// This example uses a lang property to set the value of the language property.
{
	const person = {
		firstName: "John",
		lastName: "Doe",
		language: "",
		set lang(lang) {
			this.language = lang;
		},
	};

	// Set an object property using a setter:
	person.lang = "en";

	// console.log(person.language);
}

/**
 * JavaScript Function or Getter?
 *
 * What is the differences between these two examples?
 */
{
	const person = {
		firstName: "John",
		lastName: "Doe",
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
	};

	const person2 = {
		firstName: "John",
		lastName: "Doe",
		get fullName() {
			return this.firstName + " " + this.lastName;
		},
	};

	/**
Example 1 access fullName as a function: person.fullName().

Example 2 access fullName as a property: person.fullName.

The second example provides a simpler syntax.
   */
}

// Data Quality
// Using the lang property, in this example, returns the value of the language property in upper case:
{
	// Create an object:
	const person = {
		firstName: "John",
		lastName: "Doe",
		language: "en",
		get lang() {
			return this.language.toUpperCase();
		},
	};
}

/**
 * Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
 */

// Object.defineProperty()
// The Object.defineProperty() method can also be used to add Getters and Setters:
{
	// Define setters and getters
	Object.defineProperty(person, "fullName", {
		get: function () {
			return this.firstName + " " + this.lastName;
		},
	});
}
