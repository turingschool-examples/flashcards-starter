const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round { 
	constructor(deck) { 
		this.deck = deck.cards;
		this.turns = 0;
		this.incorrectGuesses = [];

	}
	returnCurrentCard() {
		return this.deck[this.turns]
	}

	takeTurn(turn) {
		this.returnCurrentCard();
		turn.giveFeedback();
		if (turn.giveFeedback() === 'incorrect!') { 
			this.incorrectGuesses.push(this.deck[this.turns].id)
			}
		this.turns++
		if (this.turns === this.deck.length) {
			this.endRound();
		}
	}

	calculatePercentCorrect() {
		return parseInt((this.turns-this.incorrectGuesses.length)/this.turns * 100)
	}

	endRound() {
		console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
	}

}

module.exports = Round;
