const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round =  require('../src/Round');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
  	const newDeck = new Deck(prototypeQuestions.map(el=>new Card({...el})));
  	const newRound = new Round(newDeck);
  	printMessage(newDeck, newRound);
  	// printQuestion(newRound);
  }

}

module.exports = Game;