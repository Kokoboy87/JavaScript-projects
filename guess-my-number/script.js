'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//  because of this function i can just use displayMessage(/* HERE */)
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	// When there is no input
	if (!guess) {
		// document.querySelector('.message').textContent = '⛔ No number!!';
		displayMessage('⛔ No number!!'); /* HERE */
		// When player wins
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!'); /* HERE */
		// Show the number when win
		document.querySelector('.number').textContent = secretNumber;
		// Change the body color when win
		document.querySelector('body').style.backgroundColor = '#60b347';
		// Increase the number box when win
		document.querySelector('.number').style.width = '30rem';
		// highscore
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// when guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(
				guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
			); /* HERE */
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥 You lost the game!!!'); /* HERE */
			document.querySelector('.score').textContent = 0;
		}
	}
	// 	// When player is to high
	// } else if (guess > secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = '📈 Too high!';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent =
	// 			'💥 You lost the game!!!';
	// 		document.querySelector('.score').textContent = 0;
	// 	}

	// 	// When player is to low
	// } else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = '📉 Too low!';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent =
	// 			'💥 You lost the game!!!';
	// 		document.querySelector('.score').textContent = 0;
	// 	}
	// }
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	// bring back to "start guessing..."
	displayMessage('Start guessing...'); /* HERE */
	// bring backe the score to 20
	document.querySelector('.score').textContent = score;
	// hide the random number
	document.querySelector('.number').textContent = '?';
	// empty the value box
	document.querySelector('.guess').value = '';
	// get back the size of the ranbom number to 15rem
	document.querySelector('.number').style.width = '15rem';
	// make the background color black again
	document.querySelector('body').style.backgroundColor = '#222';
});
