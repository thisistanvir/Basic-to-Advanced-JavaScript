/**
 * JS Boolean
 *
 * A JavaScript Boolean represents one of two values: true or false.
 *
 * Very often, in programming, you will need a data type that can only have one of two values, like
 * YES / NO
 * ON / OFF
 * TRUE / FALSE
 * For this, JavaScript has a Boolean data type. It can only take the values true or false.
 */

/**
 * Boolean() Function
 * You can use the Boolean() function to find out if an expression (or a variable) is true:
 */
{
	Boolean(10 > 9);
}
{
	10 > 9;
	10 > 9;
}

/**
 * Everything With a "Value" is True
 */
{
	100;

	3.14 - 15;

	("Hello");

	("false");

	7 + 1 + 3.14;
}

/**
 * Everything Without a "Value" is False
 */
{
	let x = 0;
	Boolean(x);
}
{
	let x = -0;
	Boolean(x);
}
{
	let x = "";
	Boolean(x);
}
{
	let x;
	Boolean(x);
}
{
	let x = null;
	Boolean(x);
}
{
	let x = false;
	Boolean(x);
}
{
	let x = 10 / "Hallo";
	Boolean(x);
}
