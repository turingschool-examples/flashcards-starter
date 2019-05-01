class Turn {
	constructor(userGuess, currentCard) {
		this.userGuess = userGuess;
		this.currentCard = currentCard;
	}

	returnGuess() {
		return this.userGuess;
	}

	returnCard() {
		return this.currentCard;
	}

	evaluateGuess() {
		if (this.userGuess === this.currentCard.correctAnswer) {
			return true;
		}
	}

	giveFeedback() {
		if (this.userGuess === this.currentCard.correctAnswer) {
			this.message = 'correct!'
		} else {
			this.message = 'incorrect!'
		}
		return this.message;
	}
}

module.exports = Turn;
