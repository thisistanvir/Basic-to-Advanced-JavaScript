let myWindow;

// select dom element
const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");

// show document object properties
href.innerHTML = "Page Location: " + location.href;
hostname.innerHTML = "Page Hostname: " + location.hostname;
pathname.innerHTML = "Page Pathname: " + location.pathname;
protocol.innerHTML = "Page Protocol: " + location.protocol;
port.innerHTML = "Page Port: " + location.port;

function newDoc() {
	window.location.assign("https://www.w3schools.com/");
}
