/**
 * JavaScript Form Validation
 *
 *
 */

function validateForm() {
	const form = document.forms["myForm"];
	const value = form["fname"].value;

	if (value == "") {
		alert("Name must be filled out");
		return false;
	}
	return false;
}

function myFunction() {
	const numb = document.getElementById("numb").value;

	let text;
	if (isNaN(numb) || numb < 1 || numb > 10) {
		text = "Input not valid";
	} else {
		text = "Input Ok";
	}

	document.getElementById("demo").innerHTML = text;
}
