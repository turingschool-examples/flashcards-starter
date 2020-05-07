const Turn = require('../src/Turns');

class Round {
	constructor(deck) {
		this.deck = deck.cards;
		this.turns = 0;
		this.currentCard = this.deck[this.turns];
		this.incorrectGuesses = [];
		this.correctPercent = 0;
	}

	returnCurrentCard() {
		this.currentCard = this.deck[this.turns];
		return this.currentCard;
	}

	takeTurn(guess) {
		const currentTurn = new Turn(guess, this.deck[this.turns]);
		this.turns++;
		currentTurn.evaluateGuess();

		if (!currentTurn.correct) {
			this.incorrectGuesses.push(currentTurn.card.id);
		}
		return currentTurn.feedback;
	}

	calculatePercentCorrect() {
		var percentNum = 100 - ((this.incorrectGuesses.length / this.turns) * 100);
		this.correctPercent = Math.round(percentNum);
	}

	endRound() {
		return `** Round over! ** You answered ${this.correctPercent}% of the questions correctly!`;
		console.log(`** Round over! ** You answered ${this.correctPercent}% of the questions correctly!`);
	}
}

module.exports = Round;