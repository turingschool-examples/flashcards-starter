const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
// const deck = new Deck()

class Game {
  constructor() {
    this.currentRound
    this.cards = []
  }

  start() {
    this.cards = prototypeQuestions.map(card => new Card(card))

      // deck.push(card)
      printMessage(this.deck, this.round)
      printQuestion(this.round)
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