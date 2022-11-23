/**
 * JS Class Syntax
 *
 * Use the keyword class to create a class.
 * Always add a method named constructor():
 */
// Syntax
{
	class ClassName {
		constructor() {}
	}
}
// EXample
{
	class Car {
		constructor(name, year) {
			this.name = name;
			this.year = year;
		}
	}

	// Using a Class
	let myCar1 = new Car("Ford", 2014);
	let myCar2 = new Car("Audi", 2019);
}

/**
 * Class Methods
 *
 * Class methods are created with the same syntax as object methods.
 * Use the keyword class to create a class.
 * Always add a constructor() method.
 * Then add any number of methods.
 */

// Syntax
{
	class ClassName {
		constructor() {}
		method_1() {}
		method_2() {}
		method_3() {}
	}
}

// Example
{
	class Car {
		constructor(name, year) {
			this.name = name;
			this.year = year;
		}
		age() {
			let date = new Date();
			return date.getFullYear() - this.year;
		}
	}

	let myCar = new Car("Ford", 2014);
	// console.log(myCar.age());
}

// You can send parameters to Class methods:
{
	class Car {
		constructor(name, year) {
			this.name = name;
			this.year = year;
		}
		age(x) {
			return x - this.year;
		}
	}

	let date = new Date();
	let year = date.getFullYear();

	let myCar = new Car("Ford", 2014);

	console.log("My car is " + myCar.age(2022) + " years old.");
}

/**
 * Use Strict
 */
{
	class Car {
		constructor(name, year) {
			this.name = name;
			this.year = year;
		}
		age() {
			// date = new Date();  // This will not work
			let date = new Date(); // This will work
			return date.getFullYear() - this.year;
		}
	}
}
