let w;

function startWorker() {
	if (typeof Worker !== "undefined") {
		// worker available

		// if worker is not already define
		if (typeof w == "undefined") {
			// create new worker
			w = new Worker("worker.js");
		}

		// listening for worker events/message
		w.onmessage = function (event) {
			document.getElementById("demo").innerHTML = event.data;
		};
	} else {
		alert("Your browser does not support web worker!");
	}
}

function stopWorker() {
	if (typeof Worker !== "undefined") {
		// worker available

		// terminate
		w.terminate();

		// resume
		w = undefined;
	} else {
		alert("Your browser does not support web worker!");
	}
}
