const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Card');
const Round = require('../src/Round');

class Game {
  constructor(currentRound) {
  	this.currentRound = currentRound;
  }

  start() {
  	const card = new Card();
  	const deck = new Deck(card);
  	const round = new Round(deck);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;