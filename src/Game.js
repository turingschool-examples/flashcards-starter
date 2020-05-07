const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
class Game {
  constructor() {
    this.cards;
    this.round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.cards = prototypeQuestions.map(element => new Card(element.id, element.question, element.answers, element.correctAnswer));
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.printQuestion(this.round);
    this.printMessage(this.deck, this.currentRound);
  }
}

module.exports = Game;
