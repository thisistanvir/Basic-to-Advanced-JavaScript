/**
 * JavaScript Promises
 *
 * syntax
 */
{
	let status = true;

	// console.log("Task 1");

	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (status) {
				resolve("Task 2");
			} else {
				reject("failed");
			}
		}, 2000);
	});

	promise
		.then(function (value) {
			// console.log(value)
		})
		.catch(function (value) {
			// console.log(value)
		});

	// console.log("Task 3");
}

const paymentSuccess = true;
const marks = 90;

function enroll() {
	console.log("Course enrollment is in process.");

	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (paymentSuccess) {
				resolve();
			} else {
				reject("Payment failed!");
			}
		}, 2000);
	});

	return promise;
}

function progress() {
	console.log("Course in progress.....");

	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (marks >= 80) {
				resolve();
			} else {
				reject("You couldn't get enough marks to get the Certificate.");
			}
		}, 3000);
	});

	return promise;
}

function getCertificate() {
	console.log("Preparing your certificate...");

	const promise = Promise.resolve("Congrats! you get the certificate.");

	return promise;
}

enroll()
	.then(progress)
	.then(getCertificate)
	.then(function (value) {
		console.log(value);
	})
	.catch(function (value) {
		console.log(value);
	});
