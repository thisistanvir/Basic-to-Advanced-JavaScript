function forward() {
	window.history.forward();
}
function goTo(n) {
	window.history.go(n);
}
function back() {
	window.history.back();
}

function getHistory() {
	alert(window.history.length);
}
