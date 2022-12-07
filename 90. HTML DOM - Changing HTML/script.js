/**
 * DOM HTML - Changing HTML
 *
 *
 */
{
	// Changing HTML Content
	document.getElementById("demo").innerHTML = "new text";
}

{
	// Changing the Value of an Attribute
	document.getElementById("myImage").src = "change.jpg";
}

{
	// Dynamic HTML content
	document.getElementById("demo").innerHTML = `Today's date is: ${Date()}`;
}

{
	// document.write()
	// In JavaScript, document.write() can be used to write directly to the HTML output stream:
	document.write(Date());
}
