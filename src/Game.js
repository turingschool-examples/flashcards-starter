const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { testData } = require('../src/test-data.js');

class Game {
  constructor() {
    this.currentRound = 1;
    this.gameCards = [];
  }

  start() {
    this.gameCards = testData;
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