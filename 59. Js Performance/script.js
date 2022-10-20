/**
 * JS Performance
 *
 * Reduce Activity in Loops
 */
{
	for (let i = 0; i < arr.length; i++) {}

	let l = arr.length;
	for (let i = 0; i < l; i++) {}
}

// Reduce DOM Access
{
	const obj = document.getElementById("demo");
	obj.innerHTML = "Hello";
}

// Avoid Unnecessary Variables
{
	let fullName = firstName + " " + lastName;
	document.getElementById("demo").innerHTML = fullName;

	document.getElementById("demo").innerHTML = firstName + " " + lastName;
}

// Delay JavaScript Loading
// Putting your scripts at the bottom of the page body lets the browser load the page first.
