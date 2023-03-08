/**
 * JS Classes
 *
 * ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
 * JavaScript Classes are templates for JavaScript Objects.
 */

// JavaScript Class Syntax
{
	class ClassName {
		constructor() {}
	}
}
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

// Class Methods
{
	class ClassName {
		constructor() {}
		method_1() {}
		method_2() {}
		method_3() {}
	}
}

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

	console.log(`My car ${myCar.age()} years old`);
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

	console.log(`My car ${myCar.age(year)} years old`);
}
