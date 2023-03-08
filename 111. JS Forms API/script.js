function myFunction() {
	const inpObj = document.getElementById("id1");
	let error = inpObj.parentElement.lastElementChild.id;

	if (inpObj.validity.valueMissing) {
		inpObj.setCustomValidity("value missing!");
	}

	if (!inpObj.checkValidity()) {
		inpObj.classList.add("error");
		if (error == "error") {
			document.getElementById(error).innerHTML = inpObj.validationMessage;
		}
	}
}
