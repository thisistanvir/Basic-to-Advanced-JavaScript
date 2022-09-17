/**
 * JS Get Date Methods
 *
 * These methods can be used for getting information from a date object:
 */
//  getFullYear()	Get the year as a four digit number (yyyy)
//  getMonth()	Get the month as a number (0-11)
//  getDate()	Get the day as a number (1-31)
//  getHours()	Get the hour (0-23)
//  getMinutes()	Get the minute (0-59)
//  getSeconds()	Get the second (0-59)
//  getMilliseconds()	Get the millisecond (0-999)
//  getTime()	Get the time (milliseconds since January 1, 1970)
//  getDay()	Get the weekday as a number (0-6)
//  Date.now()	Get the time. ECMAScript 5.

// The getTime() Method
{
	const d = new Date();
	d.getTime();
}

// The getFullYear() Method
{
	const d = new Date();
	d.getFullYear();
}

// The getMonth() Method
// In JavaScript, the first month (January) is month number 0, so December returns month number 11.
{
	const d = new Date();
	d.getMonth();
}

// The getDate() Method
{
	const d = new Date();
	d.getDate();
}

// The getHours() Method
{
	const d = new Date();
	d.getHours();
}

// The getMinutes() Method
{
	const d = new Date();
	d.getMinutes();
}

// The getSeconds() Method
{
	const d = new Date();
	d.getSeconds();
}

// The getMilliseconds() Method
{
	const d = new Date();
	d.getMilliseconds();
}

// The getDay() Method
// In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"
{
	const d = new Date();
	d.getDay();
}

/**
 * UTC Date Methods
 *
 * UTC date methods are used for working with UTC dates (Universal Time Zone dates):
 */
//  getUTCDate()	Same as getDate(), but returns the UTC date
//  getUTCDay()	Same as getDay(), but returns the UTC day
//  getUTCFullYear()	Same as getFullYear(), but returns the UTC year
//  getUTCHours()	Same as getHours(), but returns the UTC hour
//  getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
//  getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
//  getUTCMonth()	Same as getMonth(), but returns the UTC month
//  getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds
