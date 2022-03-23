const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  start() {
    var cards = prototypeQuestions;
    var newDeck = new Deck(cards);
    var newRound = new Round(newDeck);
    this.currentRound = newRound;
    this.printMessage(newDeck, newRound);
    this.printQuestion(newRound);
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
