/**
 * Dom Animation
 *
 */

function myMove() {
	const elem = document.getElementById("animate");
	let pos = 0;
	const interval = setInterval(frame, 5);

	function frame() {
		if (pos < 350) {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		} else {
			clearInterval(interval);
		}
	}
}
