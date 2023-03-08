/**
 * JS Array Methods
 *
 *
 * Converting Arrays to Strings
 * The JavaScript method toString() converts an array to a string of (comma separated) array values.
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.toString();
	// Result: Banana,Orange,Apple,Mango
}

/**
 * The join() method also joins all array elements into a string.
 * It behaves just like toString(), but in addition you can specify the separator:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.join(" * ");
	// Banana * Orange * Apple * Mango
}

/**
 * JavaScript Array pop()
 *
 * The pop() method removes the last element from an array:
 * The pop() method returns the value that was "popped out":
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.pop();
}

/**
 * JavaScript Array push()
 *
 * The push() method adds a new element to an array (at the end):
 * The push() method returns the new array length:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let length = fruits.push("Kiwi");
}

/**
 * JavaScript Array shift()
 *
 * The shift() method removes the first array element and "shifts" all other elements to a lower index.
 * The shift() method returns the value that was "shifted out":
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	let fruit = fruits.shift();
}

/**
 * JavaScript Array unshift()
 *
 * The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
 * The unshift() method returns the new array length.
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.unshift("Lemon");
}

/**
 * Changing Elements
 *
 * Array elements are accessed using their index number:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits[0] = "Kiwi";
}

// The length property provides an easy way to append a new element to an array:
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits[fruits.length] = "Kiwi";
}

/**
 * JavaScript Array delete()
 *
 * Array elements can be deleted using the JavaScript operator delete.
 * Using delete leaves undefined holes in the array.
 * Use pop() or shift() instead.
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	delete fruits[0];
}

/**
 * Merging (Concatenating) Arrays
 *
 * The concat() method creates a new array by merging (concatenating) existing arrays:
 * The concat() method does not change the existing arrays. It always returns a new array.
 */
{
	const myGirls = ["Cecilie", "Lone"];
	const myBoys = ["Emil", "Tobias", "Linus"];

	const myChildren = myGirls.concat(myBoys);
}
{
	const arr1 = ["Cecilie", "Lone"];
	const arr2 = ["Emil", "Tobias", "Linus"];
	const arr3 = ["Robin", "Morgan"];
	const myChildren = arr1.concat(arr2, arr3);
}

/**
 * Splicing and Slicing Arrays
 *
 * The splice() method can be used to add new items to an array:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2, 0, "Lemon", "Kiwi");
}

/**
 * Using splice() to Remove Elements
 *
 * With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(0, 1);
}

/**
 * JavaScript Array slice()
 *
 * The slice() method slices out a piece of an array into a new array.
 * This example slices out a part of an array starting from array element 1 ("Orange"):
 *
 * The slice() method creates a new array.
 * The slice() method does not remove any elements from the source array.
 */
{
	const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	const citrus = fruits.slice(1);
}

/**
 * Automatic toString()
 *
 * JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
 * This is always the case when you try to output an array.
 * These two examples will produce the same result:
 */
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.toString();
}
{
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits;
}
