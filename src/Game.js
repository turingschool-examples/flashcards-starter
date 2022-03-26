const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = null
    this.deck = null
  }

  start() {
    this.deck = new Deck(prototypeQuestions)
    this.currentRound = new Round(this.deck)
    this.printMessage(this.deck)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }


}

module.exports = Game;