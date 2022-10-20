/**
 * JS Arrow Function
 */

// Before Arrow:
{
	hello = function () {
		return "Hello World!";
	};
}

// With Arrow Function:
{
	hello = () => {
		return "Hello World!";
	};
}

// Arrow Functions Return Value by Default:
{
	hello = () => "Hello World!";
}

// Arrow Function With Parameters:
{
	hello = val => "Hello " + val;
}

// Arrow Function Without Parentheses:
{
	hello = val => "Hello " + val;
}

// With a regular function this represents the object that calls the function:
{
	// Regular Function:
	hello = function () {
		document.getElementById("demo").innerHTML += this;
	};

	// The window object calls the function:
	window.addEventListener("load", hello); // window object

	// A button object calls the function:
	document.getElementById("btn").addEventListener("click", hello); // htmlButton element
}

// With an arrow function this represents the owner of the function:
{
	// Arrow Function:
	hello = () => {
		document.getElementById("demo").innerHTML += this;
	};

	// The window object calls the function:
	window.addEventListener("load", hello); // window object

	// A button object calls the function:
	document.getElementById("btn").addEventListener("click", hello); // window object
}
