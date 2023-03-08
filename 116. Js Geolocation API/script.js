const display = document.getElementById("display");
const map = document.getElementById("map");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showMap, showError);
	} else {
		display.innerHTML = "Geolocation is not supported in your Browser!";
	}
}

function showPosition(position) {
	display.innerHTML =
		"Latitude: " +
		position.coords.latitude +
		"<br>Longitude: " +
		position.coords.longitude;
}

function showMap(position) {
	let latlon = position.coords.latitude + "," + position.coords.longitude;

	let iframe =
		'<iframe class="map" width="924" height="208" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/?ie=UTF8&t=m&ll=' +
		latlon +
		'&spn=0.003381,0.017231&z=16&output=embed"></iframe>';

	map.innerHTML = iframe;
}

function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			display.innerHTML = "User denied the request for Geolocation.";
			break;
		case error.POSITION_UNAVAILABLE:
			display.innerHTML = "Location information is unavailable.";
			break;
		case error.TIMEOUT:
			display.innerHTML = "The request to get user location timed out.";
			break;
		case error.UNKNOWN_ERROR:
			display.innerHTML = "An unknown error occurred.";
			break;
	}
}
