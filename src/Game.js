const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const Card = require('../src/Card');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.cards = null;
    this.deck = null;
    this.currentRound = null;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.loadNewRound(round);
  }
  
  startGame() {
    this.cards = prototypeQuestions.map(cardInfo => new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer));
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;