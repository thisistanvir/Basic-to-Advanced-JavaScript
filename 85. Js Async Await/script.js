/**
 * Js Async/Await
 *
 *
 */
const paymentSuccess = true;
const marks = 80;

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

	const promise = new Promise(function (resolve) {
		setTimeout(() => {
			resolve("Congrats! you get the certificate.");
		}, 1000);
	});

	return promise;
}

// async await
async function course() {
	try {
		await enroll();
		await progress();
		const message = await getCertificate();

		console.log(message);
	} catch (err) {
		console.log(err);
	}
}

course();

// enroll()
// 	.then(progress)
// 	.then(getCertificate)
// 	.then(function (value) {
// 		console.log(value);
// 	})
// 	.catch(function (value) {
// 		console.log(value);
// 	});
