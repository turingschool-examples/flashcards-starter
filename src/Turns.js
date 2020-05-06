/* eslint-disable indent */

class Turn {
    constructor(guess, card) {
		this.guess = guess;
    this.card = card;
		this.correct = false;
		this.feedback = '';
    }

    returnGuess() {
        console.log(this.guess);
    }

    returnCard() {
        console.log(this.card);
    }

    evaluateGuess() {
        if (this.guess === this.card.correctAnswer) {
            this.correct = true;
        } else {
            this.correct = false;
				}
				this.giveFeedback();
    }

    giveFeedback() {
		if (this.correct === true) {
			this.feedback = 'correct!';
		} else {
			this.feedback = 'incorrect!';
		}
       console.log(this.feedback);
    }
}

module.exports = Turn;