/**
 * JS Date Formats
 *
 * JavaScript Date Input
 * There are generally 3 types of JavaScript date input formats:
 * ISO Date	"2015-03-25" (The International Standard)
 * Short Date	"03/25/2015"
 * Long Date	"Mar 25 2015" or "25 Mar 2015"
 */

/**
 * JavaScript Short Dates.
 *
 * Short dates are written with an "MM/DD/YYYY" syntax like this:
 */
{
	const d = new Date("03/25/2015");
}

/**
 * JavaScript Long Dates.
 *
 * Long dates are most often written with a "MMM DD YYYY" syntax like this:
 */
{
	const d = new Date("Mar 25 2015");

	const d1 = new Date("25 Mar 2015");
}

/**
 * Date Input - Parsing Dates
 *
 * If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
 * Date.parse() returns the number of milliseconds between the date and January 1, 1970:
 */
{
	let msec = Date.parse("March 21, 2012");
	const d = new Date(msec);
}
