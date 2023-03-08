/**
 * JS Class Inheritance
 *
 * To create a class inheritance, use the extends keyword.
 * A class created with a class inheritance inherits all the methods from another class:
 */
// Example
{
	class Car {
		constructor(brand) {
			this.carname = brand;
		}
		present() {
			return "I have a " + this.carname;
		}
	}

	class Model extends Car {
		constructor(brand, mod) {
			super(brand);
			this.model = mod;
		}
		show() {
			return this.present() + ", it is a " + this.model;
		}
	}

	let myCar = new Model("Ford", "Mustang");

	// console.log(myCar.show())

	// The super() method refers to the parent class.
	// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
}

/**
 * Getters and Setters
 *
 *
 * Classes also allows you to use getters and setters.
 * It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
 * To add getters and setters in the class, use the get and set keywords.
 */
// Example
{
	class Car {
		constructor(brand) {
			this.carname = brand;
		}
		get cnam() {
			return this.carname;
		}
		set cnam(x) {
			this.carname = x;
		}
	}

	let myCar = new Car("Ford");
	// myCar.cnam = "volvo";
	console.log(myCar.cnam);
}

// he name of the getter/setter method cannot be the same as the name of the property, in this case carname.

// Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
{
	class Car {
		constructor(brand) {
			this._carname = brand;
		}
		get carname() {
			return this._carname;
		}
		set carname(x) {
			this._carname = x;
		}
	}

	let myCar = new Car("Ford");

	document.getElementById("demo").innerHTML = myCar.carname;
}

// To use a setter, use the same syntax as when you set a property value, without parentheses:
{
	class Car {
		constructor(brand) {
			this._carname = brand;
		}
		get carname() {
			return this._carname;
		}
		set carname(x) {
			this._carname = x;
		}
	}

	let myCar = new Car("Ford");
	myCar.carname = "Volvo";
	document.getElementById("demo").innerHTML = myCar.carname;
}

/**
 * Hoisting
 *
 * Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
 * That means that you must declare a class before you can use it:
 */
