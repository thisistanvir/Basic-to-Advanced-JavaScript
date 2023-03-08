/**
 * Dom collections
 *
 * The getElementsByTagName() method returns an HTMLCollection object.
 * An HTMLCollection object is an array-like list (collection) of HTML elements.
 * The following code selects all <p> elements in a document:
 *
 * An HTMLCollection may look like an array, but it is not.
 * You can loop through the list and refer to the elements with a number (just like an array).
 * However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.
 */

const myCollection = document.getElementsByTagName("p");
console.dir(myCollection);

// myCollection.length
