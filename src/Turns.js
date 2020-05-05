/* eslint-disable indent */

class Turn {
    constructor(guess, card) {
		this.guess = guess;
        this.card = card;
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
        if (this.guess === this.card.correctAnswer) {
            this.correct = true;
        } else {
            this.correct = false;
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