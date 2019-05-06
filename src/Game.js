const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    console.log(util.main(round));
  }

  start() {
    let cards = prototypeQuestions.map(ele => {
      let card = new Card(ele.id, ele.question, ele.answers, ele.correctAnswer)
    });
    let deck = new Deck(cards);
    let round = new Round(deck)
    this.currentRound = round;
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;