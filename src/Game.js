const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start() {
    // needs to be a new round and new deck for the new Game
    // new variables? new instances 
  }
}

module.exports = Game;
