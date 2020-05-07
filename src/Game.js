const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('./Deck');
const Card = require('../src/Card');

class Game {
  constructor(round) {
		this.currentRound = round;
	}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
	}

	start() {
		let cards = [];
		data.forEach((currentCard) => {
			currentCard = new Card(
				currentCard.id,
				currentCard.question,
				currentCard.answers,
				currentCard.correctAnswer);
				cards.push(currentCard);
			})

		let deck = new Deck(cards);
		let round = new Round(deck);

		console.log('CARD :', deck.cards);
		const cardDeck = deck.cards;
		return cardDeck;

		this.printMessage(deck, round);
		this.printQuestion(round);
	}
}

module.exports = Game;