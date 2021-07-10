const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('./data');
const util = require('./util');
const prototypeQuestions = data.prototypeData;

class Game {
  constructor() {
    this.currentRound = null;
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
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
