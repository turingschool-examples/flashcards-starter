const Turn = require("./Turn")

class Round {
	constructor(deck) {
		this.turnCount = 0;
		this.currentCards = deck.cards;
		this.currentTurn = {};
		this.incorrectGuesses = [];
	}

	returnCurrentCard() {
		return this.currentCards[this.turnCount]
	}

	takeTurn(guess) {
		this.currentTurn = new Turn(guess, this.returnCurrentCard())
		this.turnCount++
		switch(this.currentTurn.evaluateGuess()) {
			case true:
				return this.currentTurn.giveFeedback()
			case false:
				this.incorrectGuesses.push(this.currentTurn.card.id)
				return this.currentTurn.giveFeedback()
		}
	}

	calculatePercentCorrect() {
		return (this.incorrectGuesses.length/this.turnCount)*100
	}

	endRound() {
		return `**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
	}

	

}

module.exports = Round;