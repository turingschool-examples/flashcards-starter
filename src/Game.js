const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = {};
  }
  start() {
    const cards = prototypeQuestions.map(prototypeQuestion => {
  return new Card(prototypeQuestion.id, prototypeQuestion.question, prototypeQuestion.answers, prototypeQuestion.correctAnswer);
  })
  const deck = new Deck(cards);
  const round = new Round(deck);
  this.currentRound = round;

  this.printMessage(deck, this.currentRound);
  this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;
