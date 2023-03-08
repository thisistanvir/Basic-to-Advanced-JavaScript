const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
	window.alert("Hello World!");
}

function showConfirm() {
	let txt;

	if (window.confirm("Please Confirm!")) {
		txt = "You Pressed Ok!";
	} else {
		txt = "You Pressed Cancel!";
	}

	confirm.innerHTML = txt;
}

function showPrompt() {
	let person = window.prompt("Please insert you name", "Harry Poter!");
	let txt;

	if (person === null || person === "") {
		txt = "User cancel the prompt!";
	} else {
		txt = "Hello " + person + "! How are you?";
	}

	prompt.innerHTML = txt;
}
