const timeOut = document.getElementById("timeOut");
const Interval = document.getElementById("Interval");

let timeoutInstance;
let intervalInstance;

function startTimeOut() {
	timeoutInstance = setTimeout(() => {
		timeOut.innerHTML = "3 second over!";
	}, 3000);
}

function stopTimeOut() {
	clearTimeout(timeoutInstance);
}

function startInterval() {
	intervalInstance = setInterval(() => {
		Interval.innerHTML = new Date().toLocaleTimeString();
	}, 1000);
}

function stopInterval() {
	clearInterval(intervalInstance);
}
