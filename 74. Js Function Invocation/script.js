/**
 * JS Function Invocation
 */

/**
 Invoking a JavaScript Function
The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".

In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.

* Invoking a Function as a Function
 */
{
	function myFunction(a, b) {
		return a * b;
	}
	myFunction(10, 2); // Will return 20

	/*
  The function above does not belong to any object. But in JavaScript there is always a default global object.

In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.

In a browser the page object is the browser window. The function above automatically becomes a window function.
  */
}

//myFunction() and window.myFunction() is the same function:
{
	function myFunction(a, b) {
		return a * b;
	}
	window.myFunction(10, 2); // Will also return 20
}

/**
 * The Global Object
 * 
When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

This example returns the window object as the value of this:
 */
{
	let x = myFunction(); // x will be the window object

	function myFunction() {
		return this;
	}
}

/**
 * Invoking a Function as a Method
 * 
In JavaScript you can define functions as object methods.

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):
 */
{
	const myObject = {
		firstName: "John",
		lastName: "Doe",
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
	};
	myObject.fullName(); // Will return "John Doe"
}

/**
 The fullName method is a function. The function belongs to the object. myObject is the owner of the function.

The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.

Test it! Change the fullName method to return the value of this:
 */
{
	const myObject = {
		firstName: "John",
		lastName: "Doe",
		fullName: function () {
			return this;
		},
	};

	// This will return [object Object] (the owner object)
	myObject.fullName();
}

/**
 * Invoking a Function with a Function Constructor
If a function invocation is preceded with the new keyword, it is a constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:
 */
{
	// This is a function constructor:
	function myFunction(arg1, arg2) {
		this.firstName = arg1;
		this.lastName = arg2;
	}

	// This creates a new object
	const myObj = new myFunction("John", "Doe");

	// This will return "John"
	myObj.firstName;
}
