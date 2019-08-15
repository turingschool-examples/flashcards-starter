const data = require('./data');
const data2 = require('./data2');
const prototypeQuestions = data.prototypeData;
const prototypeQuestions2 = data2.prototypeData;
const util = require('./util');
const Deck = require('./Deck');
const Round = require('./Round');
const Card = require('./Card');

class Game {
  constructor() {
    this.cards = [];
    this.createCards(prototypeQuestions);
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound(round) {
    return util.getRound(round);
  }

  createCards(prototypeQuestions) {
    prototypeQuestions.forEach(card => this.createCard(card));
  }

  createCard(card) {
    this.cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer));
  }
}

module.exports = Game;