const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Game {
  constructor(round) {
    this.currentRound = round;
  }

  start() {
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
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