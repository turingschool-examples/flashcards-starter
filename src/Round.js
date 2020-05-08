const Turn = require('../src/Turns');
const Deck = require('../src/Deck');

class Round {
	constructor(deck) {
		this.deck = (deck instanceof Deck) ? deck.cards : undefined;
		this.turns = 0;
		this.currentCard = (deck instanceof Deck) ? this.deck[this.turns] : undefined;
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
		this.calculatePercentCorrect();
		console.log(`** Round over! ** You answered ${this.correctPercent}% of the questions correctly!`);
		return `** Round over! ** You answered ${this.correctPercent}% of the questions correctly!`;
	}
}

module.exports = Round;