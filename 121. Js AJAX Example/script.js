function sendRequest(method, url, data) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.onload = function () {
			// handle application error
			if (this.status >= 400) {
				reject(
					`There wan and application error and the response status is ${this.status}`
				);
			}

			resolve(this.response);
		};

		xhr.onerror = function () {
			reject("There was an Error");
		};

		xhr.open(method, url);

		// response type
		xhr.responseType = "json";

		xhr.send(data);
	});

	return promise;
}

function getData() {
	sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/text")
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
}

function sendData() {
	sendRequest(
		"POST",
		"https://jsonplaceholder.typicode.com/posts",
		JSON.stringify({
			title: "foo",
			body: "bar",
			userId: 1,
		})
	).then(response => {
		console.log(response);
	});
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
