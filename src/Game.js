const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = 0;
  }
  start() {
// Creates Cards
  const card = new Card(prototypeQuestions); // with the data.js (prototype) as an argument.
// Puts Cards in a Deck
  const deck = new Deck(card);
// Creates a new Round using the Deck

// invokes printMessage to display the message in the CLI

// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;
