const Turn = require('../src/Turn');

class Round {
	constructor(deck) {
		this.deck = deck || [];
		this.turns = 0;
		this.incorrectGuesses = [];
	}
	returnCurrentCard() {
		return this.deck.cards[this.turns];
	}
	takeTurn(guess) {
		const turn = this.createTurn(guess);
		this.addIncorrectGuess(turn);
		this.turns++;
		return this.getTurnFeedback(turn);
	}
	createTurn(guess) {
		const currentCard = this.returnCurrentCard();
		return new Turn(guess, currentCard);
	}
	addIncorrectGuess(turn) {
		if (turn.evaluateGuess() === false) {
			this.incorrectGuesses.push(turn.card.id);			
		}
	}
	getTurnFeedback(turn) {
		return turn.giveFeedback();
	}
	calculatePercentCorrect() {
		return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
	}
	endRound() {
		console.log(`** Round over! ** You answered ${calculatePercentCorrect()}% of the questions correctly!`);
	}
}

module.exports = Round;