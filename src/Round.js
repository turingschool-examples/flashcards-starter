const Turn = require('../src/Turn');

class Round {
	constructor(deck) {
		this.deck = deck || [];
		this.turns = 0;
		this.incorrectGuess = [];
	}
	returnCurrentCard() {
		return this.deck.cards[this.turns];
	}

	takeTurn(guess) {
		const turn = new Turn(guess, this.returnCurrentCard());
		this.turns += 1;
		turn.evaluateGuess() ? null : this.incorrectGuess.push(turn.card.id);
		return turn.giveFeedback();
	}

	calculatePercentCorrect() {
		var makePercentage = (Math.floor(100 - (this.incorrectGuess.length / this.turns * 100)));
		return makePercentage
	}

	endRound() {
		console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
	}
}

module.exports = Round;