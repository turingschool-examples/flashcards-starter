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

	calculatePercentCorrect() {
		const totalIncorrect = Math.floor(this.incorrectGuesses/this.turns*100);
		const totalCorrect = Math.floor(100) - totalIncorrect;
		return totalCorrect;
	}

	endRound() {
		if(this.turns >= this.cardDeck.cards.length) {
			return `** Round Over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly!`
		}
	}

}

module.exports = Round;