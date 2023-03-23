const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards = [];
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  createCards() {
    prototypeQuestions.forEach((question) =>  {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      this.cards.push(card);
    });
  }
  start() {
    this.createCards();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;