const data = require('./data');
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
      let deckOfCards = new Deck(this.createCards());
      let round = new Round(deckOfCards);
      this.printMessage(deckOfCards, round);
      this.printQuestion(round);
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
