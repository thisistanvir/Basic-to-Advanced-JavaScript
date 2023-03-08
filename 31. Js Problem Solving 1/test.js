/**
 * লুডু খেলার জন্য ১ থেকে ৬ পর্যন্ত রান্ডমলি প্রিন্ট করা
 */

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandom(1, 6));

/**
 * কিভাবে আমারা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি
 */

const students = ["Sumit", "Tanvir", "Walid", "Mousumi", "Shahed", "Ashik"];

let sortStudents = students.sort();
// console.log(sortStudents);

/**
 * কিভাবে আমারা আমাদের শ্রেণীকক্ষের সকলের নাম রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি ?
 */

const roll_students = [10, 2, 3, 5, 9, 1];

let sortRoll = roll_students.sort(function (a, b) {
	return a - b;
});
// console.log(sortRoll);

/**
 * কোন একটা সাল leap year কিনা তা বের করতে পারি কি ভাবে?
 */
function isLeapYear(year) {
	if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
		console.log(`${year} is a leap year`);
	} else {
		console.log(`${year} is not a leap year`);
	}
}
// isLeapYear(2028);

/**
 * কোন sentence এ কতগুলা vowel আছে তা কিভাবে নির্ধারণ করা যায়?
 */
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
	let count = 0;
	const letters = Array.from(sentence);

	letters.forEach(function (value, index, array) {
		if (vowels.includes(value)) {
			count++;
		}
	});
	return count;
}

// console.log(countVowels("I love Bangladesh"));

/**
 * কোন Array থেকে কিভাবে duplicate নাম্বার গুলকে বের করে আনতে পারি?
 */
const numbers = [1, 3, 5, , 5, 2, 9, 10, 6, 4, 3];

let duplicate = numbers.filter(function (value, index, array) {
	return array.indexOf(value) !== index;
});

// console.log(duplicate);

/**
 * কোন Array থেকে কিভাবে uniq নাম্বার গুলকে বের করে আনতে পারি?
 */
//  const numbers = [1, 3, 5, , 5, 2, 9, 10, 6, 4, 3];

let uniq = numbers.filter(function (value, index, array) {
	return array.indexOf(value) === index;
});
// console.log(uniq);
