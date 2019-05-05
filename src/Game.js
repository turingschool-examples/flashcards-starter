const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.roundCounter = 0;
  }

  start() {
    const deck = new Deck(prototypeQuestions[this.roundCounter]);
    const round = new Round(deck, this);
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;