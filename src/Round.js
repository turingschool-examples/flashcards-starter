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

		if(turn.evaluateGuess() === false) {
			this.incorrectGuesses.push(turn.currentCard.id);
		}
		const feedback = turn.giveFeedback();
		this.turns++;
		return feedback;
	}

	// returnFeedBack(feedback) {
	// 	return turn.giveFeedback() ? this.turns++ :
	// }


}

module.exports = Round;