const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('./Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
		this.currentRound = {};
		this.currentCards = [];
		this.currentDeck = {};
	}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
	}

	start() {
		data.forEach((currentCard) => {
			currentCard = new Card(
				currentCard.id,
				currentCard.question,
				currentCard.answers,
				currentCard.correctAnswer);
				this.currentCards.push(currentCard);
			})

		this.currentDeck = new Deck(this.currentCards);
		this.currentRound = new Round(this.currentDeck);

		
		// this.printMessage(this.currentDeck, this.currentRound);
		// this.printQuestion(this.currentRound);
	}
}

module.exports = Game;