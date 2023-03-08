const display = document.getElementById("display");

async function getData() {
	const data = await fetch(
		"http://127.0.0.1:5500/115.%20Js%20Fetch%20API/data.txt"
	);
	const text = await data.text();

	display.innerText = text;
}
