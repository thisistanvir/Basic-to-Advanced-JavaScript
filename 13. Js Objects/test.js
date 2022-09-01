/**
 * JavaScript Objects
 *
 * All cars have the same properties, but the property values differ from car to car.
 * All cars have the same methods, but the methods are performed at different times.
 */

const car = {
	name: "Fait",
	model: "500",
	weight: "850kg",
	color: "white",
	start: function () {
		console.log("Car has started");
	},
	drive: function () {
		console.log("car is driving");
	},
	fullName: function () {
		return this.name + " " + this.model;
	},
};

console.log(car.name);
console.log(car["color"]);
console.log(car.fullName());
