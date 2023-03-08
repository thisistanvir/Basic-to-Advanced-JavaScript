function loadData(callbackF) {
	// create a new request
	const xhr = new XMLHttpRequest();

	// what to do when response arrives
	xhr.onload = function () {
		callbackF(this);
	};

	// prepare request Methods: GET, POST, PUT, PATCH, DELETE .....
	xhr.open("GET", "./data/data.txt");

	// send request
	xhr.send();
}

function myCallback1(xhr) {
	const container = document.getElementById("container");
	container.innerHTML = xhr.responseText;
}
function myCallback2(xhr) {
	const demo2 = document.getElementById("demo2");
	demo2.innerHTML = xhr.responseText;
}
