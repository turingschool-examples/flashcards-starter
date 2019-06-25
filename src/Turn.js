class Turn {
	constructor (userGuess, card) {
		this.userGuess = userGuess;
		this.currentCard = card;
	}

	returnGuess() {
		return this.userGuess;
	}

	returnCard() {
		return this.card;
	}

	evaluateGuess() {
		return this.currentCard.correctAnswer === this.userGuess;

	}

	giveFeedback() {
		this.currentCard.correctAnswer === this.userGuess ? 'Correct!' : 'Incorrect!'
	}

}




 module.exports = Turn;

 
s 
