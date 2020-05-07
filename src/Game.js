const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('./Deck');
const Round = require('./Round');

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
		const deck = new Deck(data);
		const round = new Round(deck);
		this.printMessage(deck, round);
		this.printQuestion(round);
	}
}

module.exports = Game;