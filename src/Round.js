const Turn = require("./Turn")

class Round {
	constructor(cards) {
		this.turnCount = 0;
		this.currentCards = cards;
	}

	returnCurrentCard() {
		return this.currentCards[this.turnCount]
	}

	takeTurn(guess) {
		let newTurn = new Turn(guess, this.returnCurrentCard()).evaluateGuess()
		this.turnCount++
		return newTurn
	}

}

module.exports = Round;