const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');


class Game {
  constructor() {
    this.currentRound = {};
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  setupRound() {
    const cards = prototypeQuestions.map(data => {
      return new Card(data.id, data.question, data.answers, data.correctAnswer);
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
  }

  start() {
    this.setupRound();
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
