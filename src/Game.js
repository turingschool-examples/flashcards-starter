const data = require('./data');
const prototypeData = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.deck = undefined;
    this.round = undefined;
  }

  makeDeck(cards) {
    this.deck = new Deck(cards);
  }

  makeRound() {
    this.round = new Round(this.deck);
  }

  start() {
    this.makeDeck(prototypeData);
    this.makeRound();
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
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