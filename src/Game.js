const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { testData } = require('../src/test-data.js');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

class Game {
  constructor() {
    this.currentRound;
    this.gameCards = [];
    this.gameDeck;
  }

  start() {
    this.gameCards = testData;
    this.gameDeck = new Deck(testData)
    this.currentRound = new Round(this.gameDeck)
    this.printMessage(this.gameDeck, this.currentRound)
    this.printQuestion(this.currentRound)
  //   console.log('deck length', this.gameDeck)
  //   this.gameDeck.countCards()
  //   console.log('deck length', this.gameDeck)
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