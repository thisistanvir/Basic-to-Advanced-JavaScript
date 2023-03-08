function setLocalStorage(key, value) {
	localStorage.setItem(key, value);
}

function getLocalStorage(key) {
	alert("storage: " + localStorage.getItem(key));
}

function removeLocalStorage(key) {
	localStorage.removeItem(key);
}

function lengthLocalStorage() {
	alert(localStorage.length);
}

function clearLocalStorage() {
	localStorage.clear();
}
