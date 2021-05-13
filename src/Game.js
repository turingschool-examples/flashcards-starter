const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(card => {
      const card1 = new Card (card.id, card.question, card.answers, card.correctAnswer)
      cards.push(card1)
    });
    let deck = new Deck (cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
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
