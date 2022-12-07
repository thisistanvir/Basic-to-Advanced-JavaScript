/**
 * Dom Node List
 *
 * A NodeList object is a list (collection) of nodes extracted from a document.
 * A NodeList object is almost the same as an HTMLCollection object.
 * Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().
 * All browsers return a NodeList object for the property childNodes.
 * Most browsers return a NodeList object for the method querySelectorAll().
 * The following code selects all <p> nodes in a document:
 */

const myCollection = document.getElementsByTagName("p");

const myNodeList = document.querySelectorAll("p");

// console.dir(myNodeList);
// console.log(myNodeList.length);

/**
 * Difference Between an HTMLCollection and a NodeList
 *
 * An HTMLCollection is a collection of document elements.
 * A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
 *
 * HTMLCollection items can be accessed by their name, id, or index number.
 * NodeList items can only be accessed by their index number.
 */
