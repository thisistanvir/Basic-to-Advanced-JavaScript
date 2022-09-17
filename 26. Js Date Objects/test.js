/**
 * JS Date Objects
 *
 * JavaScript Date Output
 */
{
	const d = new Date();
	// console.log(d);
}

/**
 * Creating Date Objects
 *
 * Date objects are created with the new Date() constructor.
 * There are 4 ways to create a new date object:
 * 
 * new Date();
	new Date(year, month, day, hours, minutes, seconds, milliseconds);
	new Date(milliseconds);
	new Date(date string);
 */
{
	// new Date()
	const d = new Date();

	// new Date(year, month, ...)
	// Note: JavaScript counts months from 0 to 11:
	const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);

	// Previous Century
	const d2 = new Date(99, 11, 24);

	// new Date(dateString)
	const d3 = new Date("October 13, 2014 11:13:00");

	//JavaScript Stores Dates as Milliseconds
	const d4 = new Date(0);
	const d5 = new Date(100000000000);
	const d6 = new Date(86400000);
}

/**
 * Displaying Dates
 */
{
	// The toUTCString() method converts a date to a UTC string (a date display standard).
	const d = new Date();
	d.toUTCString();

	// The toDateString() method converts a date to a more readable format:
	const d1 = new Date();
	d.toDateString();

	// The toISOString() method converts a Date object to a string, using the ISO standard format:
	const d2 = new Date();
	d.toISOString();
	console.log(d1);
}
