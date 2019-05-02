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
    const cards = this.createNewCard();
    const deck = this.createNewDeck(cards);
    const round = this.createNewRound(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  createNewCard() {
    return prototypeQuestions.map(el => {
      return new Card(el.id, el.question, el.answers, el.correctAnswer);
    });
  }

  createNewDeck(cards) {
    return new Deck(cards);
  }

  createNewRound(deck) {
    return new Round(deck);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;