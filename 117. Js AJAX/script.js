function loadData() {
	// create a new request
	const xhr = new XMLHttpRequest();

	// what to do when response arrives
	xhr.onload = () => {
		const container = document.getElementById("container");
		container.innerHTML = xhr.responseText;
	};

	// prepare request Methods: GET, POST, PUT, PATCH, DELETE .....
	xhr.open("GET", "./data/data.txt");

	// send request
	xhr.send();
}
