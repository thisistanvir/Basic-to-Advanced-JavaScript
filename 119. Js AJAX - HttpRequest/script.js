function loadData() {
	// create a new request
	const xhr = new XMLHttpRequest();

	// what to do when response arrives
	xhr.onload = () => {
		console.log("request finished");
		const container = document.getElementById("container");
		container.innerHTML = xhr.responseText;
	};

	// prepare request Methods: GET, POST, PUT, PATCH, DELETE .....
	xhr.open("GET", "./data/data.txt?t=" + Math.random(), true); // default
	// xhr.open("GET", "./data/data.txt", false);

	// send request
	xhr.send();

	console.log("hello");
}
