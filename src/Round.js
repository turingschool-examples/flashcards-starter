const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
	constructor(deck, game) {
		this.deck = deck || [];
		this.game = game;
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
		console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
		if(this.game.roundNumber < prototypeQuestions.length && this.calculatePercentCorrect() === 100) {
			this.game.roundNumber++;
			this.game.start();
		} else if (this.calculatePercentCorrect() >= 90) {
			this.game.start(prototypeQuestions[this.game.roundNumber].filter(el => this.incorrectGuesses.includes(el.id)));
		} else if (this.calculatePercentCorrect() < 90) {
			this.game.start(prototypeQuestions[this.game.roundNumber]);
		} else {
			console.log('Game over buddy');
		}
	}
}

module.exports = Round;