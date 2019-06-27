const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor(deck) {
  this.currentRound = 0;
  this.deck = deck || prototypeQuestions;
  this.round;

}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countDeck()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  startRound() {
    this.buildDeck();
    this.buildRound();
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
    this.currentRound++

  };

  buildDeck() {
    var currentDeck = new Deck(this.deck.map(function(card) {
      return new Card(card);
    }));
    this.deck = currentDeck;
  };

  buildRound() {
  this.round = new Round(this.deck);
  };
};

module.exports = Game;