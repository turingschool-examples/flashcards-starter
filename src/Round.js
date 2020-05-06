const Turn = require('../src/Turns');

class Round {
	constructor(deck) {
		this.deck = deck.cards;
		this.turns = 0;
		this.currentCard = this.deck[this.turns];
		this.incorrectGuesses = [];
		this.feedback = '';
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
		this.feedback = currentTurn.feedback;

		if (currentTurn.correct === false) {
			this.incorrectGuesses.push(currentTurn.card.id);
		}
	}

	calculatePercentCorrect() {
		//calculates & returns % of correct guesses
		var percentNum = 100 - ((this.incorrectGuesses.length / this.turns) * 100);
		this.correctPercent = Math.round(percentNum);
		return `You got ${this.correctPercent}% correct!`;
	}

	endRound() {
		//returns `** Round over! ** You answered ${number}% of the questions correctly!`;
	}
}

module.exports = Round;