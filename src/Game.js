const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Game {
  constructor() {
    this.currentRound = this.start();
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = [];
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let { id, question, answers, correctAnswer } = prototypeQuestions[i];
      const card = new Card(id, question, answers, correctAnswer);
      cards.push(card);
    }
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    return round;
  }
}

module.exports = Game;
