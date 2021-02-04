const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards = [];
    this.deck;
    this.currentRound;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  start = () => {
    prototypeQuestions.forEach(question => {
      this.cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer))
    });

    this.deck = new Deck(this.cards);

    this.currentRound = new Round(this.deck);
  };

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
