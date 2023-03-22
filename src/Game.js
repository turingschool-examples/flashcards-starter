const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { testData } = require('../src/test-data.js');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 1;
    this.gameCards = [];
    this.gameDeck;
  }

  start(gameData) {
    this.gameCards = gameData;
    this.gameDeck = new Deck(gameData)
    this.pringMessage()
    this.printQuestion()
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