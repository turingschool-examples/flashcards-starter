/* eslint-disable indent */

class Turn {
    constructor(guess, card) {
			this.guess = (typeof guess === "string") ? guess : undefined;
			this.card = (typeof card === "object") ? card : undefined;
			this.correct = false;
			this.feedback = '';
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

		evaluateGuess() {
			this.giveFeedback();
			if (this.guess === this.card.correctAnswer) {
					this.correct = true;
					this.feedback = 'correct!'
			} else {
					this.correct = false;
					this.feedback = 'incorrect!'
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