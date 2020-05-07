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
			this.giveFeedback();
			if (this.guess === this.card.correctAnswer) {
					this.correct = true;
					this.feedback = 'correct!'
					// return this.correct;
			} else {
					this.correct = false;
					this.feedback = 'incorrect'
					// return this.correct;
			}
	}

	giveFeedback() {
		if (this.correct === true) {
			this.feedback = 'correct!';
		} else {
			this.feedback = 'incorrect!';
		}
			return this.feedback;
	}
}

module.exports = Turn;