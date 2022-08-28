const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/deck');
const Round = require('./round');


class Game {
  constructor(round) {
    this.currentRound = round;
  }

  start() {
    const newDeck = new Deck(prototypeQuestions)
    this.currentRound = new Round(newDeck)
    this.printMessage(newDeck, this.currentRound)
    this.printQuestion(this.currentRound)
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