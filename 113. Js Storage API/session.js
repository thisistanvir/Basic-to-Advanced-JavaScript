function setSessionStorage(key, value) {
	sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
	alert("storage: " + sessionStorage.getItem(key));
}

function removeSessionStorage(key) {
	sessionStorage.removeItem(key);
}

function lengthSessionStorage() {
	alert(sessionStorage.length);
}

function clearSessionStorage() {
	sessionStorage.clear();
}
