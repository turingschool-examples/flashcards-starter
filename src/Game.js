const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Deck');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }
  start() {
    let data = prototypeQuestions;
    let cards = data.map(data => {
      return new Card(data.id, data.question, data.answers, data.correctAnswer);
    });

    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
