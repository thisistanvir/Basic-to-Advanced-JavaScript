/**
 * JS Break and Continue
 *
 * The break statement "jumps out" of a loop.
 * The continue statement "jumps over" one iteration in the loop.
 */

// Break
{
	for (let i = 0; i < 10; i++) {
		if (i === 3) {
			break;
		}
		console.log("The Number is " + i);
	}
}

// Continue
{
	for (let i = 0; i < 10; i++) {
		if (i === 3) {
			continue;
		}
		console.log("The Number is " + i);
	}
}
