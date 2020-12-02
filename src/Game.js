const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(roundCount) {
    this.roundCount = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  // should keep track of the current round
  // but should it increment it?
  // or should that happen in Round?

  // game start method:
  // create cards
  // create deck
  // create round
  // invoke this.printMessage
  // invoke this.printQuestion
}

module.exports = Game;