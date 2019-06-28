const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

class Round { 
	constructor(deck, game) { 
		this.deck = deck.cards;
		this.turns = 0;
		this.incorrectGuesses = [];
		this.game = game;

	}
	returnCurrentCard() {
		return this.deck[this.turns]
	}

	takeTurn(guess) {
		const currentCard = this.returnCurrentCard();
		const newTurn = new Turn(guess, currentCard)
		newTurn.giveFeedback();
		if (newTurn.giveFeedback() === 'incorrect!') { 
			this.incorrectGuesses.push(this.deck[this.turns].id)
			}
		this.turns++
		return newTurn.giveFeedback();
	}

	calculatePercentCorrect() {
		return parseInt((this.turns-this.incorrectGuesses.length)/this.turns * 100);
	}

	endRound() {
		console.log(`\n\n\n**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
		if (this.calculatePercentCorrect() < 90) {
			this.game.start();
		}
	}

}

module.exports = Round;
