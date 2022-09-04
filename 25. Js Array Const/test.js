/**
 * JS Array Const
 *
 * in 2015, JavaScript introduced an important new keyword: const.
 * It has become a common practice to declare arrays using const:
 */
const cars = ["Saab", "Volvo", "BMW"];

/**
 * Cannot be Reassigned
 * An array declared with const cannot be reassigned:
 */
{
	const cars = ["Saab", "Volvo", "BMW"];
	cars = ["Toyota", "Volvo", "Audi"]; // ERROR
}

/**
 * Arrays are Not Constants
 * The keyword const is a little misleading.
 * It does NOT define a constant array. It defines a constant reference to an array.
 * Because of this, we can still change the elements of a constant array.
 */

/**
 * Elements Can be Reassigned
 *
 * You can change the elements of a constant array:
 */
{
	// You can create a constant array:
	const cars = ["Saab", "Volvo", "BMW"];

	// You can change an element:
	cars[0] = "Toyota";

	// You can add an element:
	cars.push("Audi");
}

/**
 * Assigned when Declared
 * JavaScript const variables must be assigned a value when they are declared:
 * Meaning: An array declared with const must be initialized when it is declared.
 * Using const without initializing the array is a syntax error:
 */
{
	const cars;
	cars = ["Saab", "Volvo", "BMW"];
}
/**
 * Arrays declared with var can be initialized at any time.
 * You can even use the array before it is declared:
 */
{
	cars = ["Saab", "Volvo", "BMW"];
	var cars;
}

/**
 * Const Block Scope
 * 
 * An array declared with const has Block Scope.
 * An array declared in a block is not the same as an array declared outside the block:
 */
{
  const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
}

// An array declared with var does not have block scope:
{
  var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
}
