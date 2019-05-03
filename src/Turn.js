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
		return this.currentCard.correctAnswer === this.userGuess;
	}

	giveFeedback() {
		return this.evaluateGuess() ? 'correct!' : 'incorrect!';
	}

}

module.exports = Turn;
