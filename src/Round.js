const Turn = require('../src/Turn');


class Round {
	constructor(cardDeck) {
		this.cardDeck = cardDeck;
		this.turns = 0;
		this.incorrectGuesses = [];
	}

	returnCurrentCard() {
		return this.cardDeck.cards[this.turns];
	}

	takeTurn(userGuess) {
		const turn = new Turn(userGuess, this.returnCurrentCard())
		this.turns++
		if(turn.evaluateGuess() === false) {
			this.incorrectGuesses.push(turn.currentCard.id);
		}
		return turn.giveFeedback();
	}

}

module.exports = Round;