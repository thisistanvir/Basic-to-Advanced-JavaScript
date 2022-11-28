/**
 * Js Asynchronous Behavior
 *
 * The examples used in the previous chapter, was very simplified.
 * The purpose of the examples was to demonstrate the syntax of callback functions:
 */

// console.log('line 1 code')
// setTimeout(() => {
//   console.log('line 2 code')
// }, 2000);
// console.log('line 3 code')

console.log("line 1 code");
setInterval(() => {
	console.log("line 2 code");
}, 2000);
console.log("line 3 code");
