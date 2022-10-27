// নিচের sentence এ "sumit" শব্দটি কয়বার ব্যবহার করা হয়েছে? প্রথমবার "sumit" কত নাম্বার পজিশনে পাওয়া গেছে?
const sentence =
	"Learn with sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, learn with sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack development. learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";
{
	let matches = sentence.match(/sumit/gi);
	matches = matches ? matches.length : "not found!";
	// console.log(matches);

	let position = sentence.search(/sumit/i);
	position = position >= 0 ? position : "not found!";
	// console.log(position);
}

// input: linearSearch(['a', 'b', 'c', 'd', 'e', 'd'], 'c')
// output: 2 or 'not found'
// problem: linearSearch function টি implement করে দেখান
{
	function linearSearch(arr, val) {
		const length = arr.length;
		for (let i = 0; i < length; i++) {
			if (arr[i] === val) {
				return i;
			}
		}
		return "not found!";
	}

	// console.log(linearSearch(["a", "b", "c", "d", "e", "c"], "c"));
}

// কোন Array থেকে কি ভাবে সবথেকে বড় string খুঁজে বের করবেন এবং তার index নাম্বার দেখাবেন?
{
	function longestString(names) {
		let longestWord = "";
		for (name of names) {
			if (name.length > longestWord.length) {
				longestWord = name;
			}
		}
		return [longestWord, names.indexOf(longestWord)];
	}
	// console.log(longestString(["tanvir", "learn with sumit", "walid", "lws"]));
}

// ১ - ১০০ পর্যন্ত কোন সংখ্যা গুল ৩, ৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন।
{
	function fizzBuzz(number) {
		for (let i = 1; i <= number; i++) {
			if (i % 15 === 0) {
				console.log(`${i} is FizzBuzz`);
			} else if (i % 3 === 0) {
				console.log(`${i} is Fizz`);
			} else if (i % 5 === 0) {
				console.log(`${i} is Buzz`);
			} else {
				console.log(i);
			}
		}
	}
	// console.log(fizzBuzz(100));
}

// Array থেকে falsy value কিভাবে খুঁজে বের করে বাদ দিতে পারি?
{
	const mixedArr = [
		"lws",
		undefined,
		"learn with sumit",
		false,
		"",
		"apple",
		40,
		"k",
		true,
		"Thanks All",
		NaN,
	];

	// const trueArray = mixedArr.filter(function (element) {
	// 	if (element) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// });

	const trueArray = mixedArr.filter(Boolean);

	// console.log(trueArray);
}

// Object থেকে falsy value কিভাবে খুঁজে বের করে বাদ দিতে পারি?
{
	const mixedObj = {
		a: "lws",
		b: undefined,
		c: "learn with sumit",
		d: false,
		e: "",
		f: "apple",
		g: 40,
		h: "k",
		i: true,
		j: "Thanks All",
		k: NaN,
	};

	function trueOjb(obj) {
		for (let i in obj) {
			if (!obj[i]) {
				delete obj[i];
			}
		}
		return obj;
	}
	console.log(trueOjb(mixedObj));
}
