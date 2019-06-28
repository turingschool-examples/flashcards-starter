const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {

  }

  printMessage(deck, round) {
      console.log(`\n\nWelcome to FlashCards! You are playing with ${deck.countCards()} cards.\n\n
-----------------------------------------------------------------------\n`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const newDeck = new Deck(prototypeQuestions.map(el=>new Card({...el})));
    const newGame = new Game();
  	const newRound = new Round(newDeck, this);
  	this.printMessage(newDeck, newRound);
  	this.printQuestion(newRound);
  }

}

module.exports = Game;