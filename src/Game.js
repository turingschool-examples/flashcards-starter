const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require("./Deck");
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = 1;
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