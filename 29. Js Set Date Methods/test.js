/**
 * JS Set Date Methods
 *
 * Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
 */
//  setDate()	Set the day as a number (1-31)
//  setFullYear()	Set the year (optionally month and day)
//  setHours()	Set the hour (0-23)
//  setMilliseconds()	Set the milliseconds (0-999)
//  setMinutes()	Set the minutes (0-59)
//  setMonth()	Set the month (0-11)
//  setSeconds()	Set the seconds (0-59)
//  setTime()	Set the time (milliseconds since January 1, 1970)

// The setFullYear() Method
{
	const d = new Date();
	d.setFullYear(2020);
}

// The setMonth() Method
{
	const d = new Date();
	d.setMonth(11);
}

// The setDate() Method
{
	const d = new Date();
	d.setDate(15);
}

// The setHours() Method
{
	const d = new Date();
	d.setHours(22);
}

// The setMinutes() Method
{
	const d = new Date();
	d.setMinutes(30);
}

// The setSeconds() Method
{
	const d = new Date();
	d.setSeconds(30);
}

/**
 * Compare Dates
 *
 * Dates can easily be compared.
 * The following example compares today's date with January 14, 2100:
 */
{
	let text = "";
	const today = new Date();
	const someday = new Date();
	someday.setFullYear(2100, 0, 14);

	if (someday > today) {
		text = "Today is before January 14, 2100.";
	} else {
		text = "Today is after January 14, 2100.";
	}
}
