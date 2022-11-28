/**
 * Callback Pattern
 */

const paymentSuccess = true;
const marks = 88;

function enroll(Callback) {
	console.log("Course enrollment is in process.");

	setTimeout(() => {
		if (paymentSuccess) {
			Callback();
		} else {
			console.log("Payment failed!");
		}
	}, 2000);
}

function progress(Callback) {
	console.log("Course in progress.....");

	setTimeout(() => {
		if (marks >= 80) {
			Callback();
		} else {
			console.log("You couldn't get enough marks to get the Certificate.");
		}
	}, 3000);
}

function getCertificate() {
	console.log("Preparing your certificate...");

	setTimeout(() => {
		console.log("Congrats! you get the certificate.");
	}, 1000);
}

enroll(() => {
	progress(getCertificate);
});
