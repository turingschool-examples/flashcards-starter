const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = undefined;
  }

  start() {
    // Creates Cards
    const cards = prototypeQuestions.map(card => new Card(
      card.id,
      card.question,
      card.answers,
      card.correctAnswer
    ));

    // Puts Cards in a Deck
    const deck = new Deck(cards);

      // Creates a new Round using the Deck
    this.currentRound = new Round(deck);

      // invokes printMessage to display the message in the CLI
    this.printMessage(deck, this.currentRound);

    // invokes printQuestion to kick off our helper functions that allow interaction via the CLI
    this.printQuestion(this.currentRound);
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
