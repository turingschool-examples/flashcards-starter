const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');


class Game {
  constructor() {
    this.currentRound = {};
  }
  start() {
    let deck = new Deck(prototypeQuestions.map(element =>
      new Card(element.id, element.question, element.answers, element.correctAnswer)))
    let round = new Round(deck);
    this.currentRound = round;

    this.printMessage(deck, round);
    this.printQuestion(round);
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
