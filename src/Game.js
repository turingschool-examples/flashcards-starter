const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require("./Turn");
class Game {
  constructor(round) {
    this.currentRound = round
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