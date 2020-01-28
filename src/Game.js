const data = require('./data');
const prototypeQuestions = data.prototypeData;
const testQuestions = data.prototypeDataTwo;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    var cards = prototypeQuestions.map(item =>
      new Card(item.id, item.question, item.answers, item.correctAnswer));
    var deck = new Deck(cards);
    var round = new Round(deck);

    this.currentRound = round;

    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
