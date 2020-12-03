const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const cards = prototypeQuestions.map(questionCard => {
      const card = new Card(questionCard.id, questionCard.question, questionCard.answers, questionCard.correctAnswer);
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
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