const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('./Round');
const Deck = require('./Deck');


class Game {
  constructor() {
    //this.round = new Round(data)
    //let currentRound = this.round
  }
  start() {
    // creates new Cards (helpers...)
    // puts cards in Deck
    // creates new Round using Deck
    // invokes printMessage below
    // invokes printQuestion below
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
