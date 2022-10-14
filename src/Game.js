const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
    this.deck = [];
    this.round = [];
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  };

  createRound() {
    this.createDeckOfCards();
    this.currentRound += 1;
    this.round = new Round(this.deck);
  };

  createDeckOfCards() {
    const cards = prototypeQuestions.map(card => {
      return this.card = new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    this.deck = new Deck(cards);
  };

  start() {
    this.createRound();
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  };
};

module.exports = Game;