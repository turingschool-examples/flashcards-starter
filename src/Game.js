const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/deck');
const Card = require('../src/Card');
const Round = require('../src/round');
prototypeQuestions.length
class Game {
  constructor() {
    this.cards = [];

  }

  start() {
    for (var i = 0; i < prototypeQuestions.length; i++) {
      var card = new Card(prototypeQuestions[i].id,
        prototypeQuestions[i].question, prototypeQuestions[i].answers,
        prototypeQuestions[i].correctAnswer)
      this.cards.push(card)
    }
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
    return this.deck.cards.length;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with
        ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
