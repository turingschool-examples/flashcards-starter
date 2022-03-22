class Turn {
	constructor(guess, card) {
		this.guess = guess
		this.card = card
	}

	returnGuess() {
		return this.guess;
	}

	returnCard() {
		return this.card;
	}

	evaluateGuess() {
		switch(this.card.correctAnswer) {
			case this.guess:
				return true;
			default:
				return false;	
		}
	}

	giveFeedback() {
		switch(true) {
			case this.evaluateGuess():
				return 'correct!'
			default:
				return 'incorrect!'
		}
	}

}

module.exports = Turn;