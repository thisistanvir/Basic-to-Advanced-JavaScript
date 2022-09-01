/**
 * JS Template Literals
 *
 * Back-Tics Syntax
 */

{
	let text = `He's often called "Johnny"`;
}

// Multiline Strings
{
	let text = `The quick
  brown fox
  jumps over
  the lazy dog`;
}

// Interpolation
{
	let firstName = "John";
	let lastName = "Doe";

	let text = `Welcome ${firstName}, ${lastName}!`;
	console.log(text);
}

// Expression Substitution
{
	let price = 10;
	let VAT = 0.25;

	let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
	console.log(total);
}
