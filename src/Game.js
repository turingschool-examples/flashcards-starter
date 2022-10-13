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
  }

  createRound() {
    this.createDeckOfCards();
    this.currentRound += 1;
    this.round = new Round(this.deck);
  }

  createDeckOfCards() {
    let cards = []
    for (let i = 0; i < prototypeQuestions.length; i++) {
    cards[i] = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
    };
    this.deck = new Deck(cards)
  }

  start() {
    this.createRound();
    this.printMessage();
    this.printQuestion();
  };
};

module.exports = Game;