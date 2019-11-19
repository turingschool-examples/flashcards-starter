class Turn {

	constructor(guess, currentCard) {
		this.guess = guess;
		this.card = currentCard;
	}

	returnGuess() {
		return this.guess;
	}

	returnCard() {
		return this.card;
	}


}

module.exports = Turn;