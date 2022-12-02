const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound;
    this.cards;
    this.deck;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
   this.instatiateClasses();
   this.printMessage(this.deck, this.currentRound);
   this.printQuestion(this.currentRound);
  }

  instatiateClasses() {
    this.cards = this.createCards(prototypeQuestions);
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
  }

  createCards(prototypeCards) {
    return prototypeCards.map(property => {
      return new Card(property.id, property.question, property.answers, property.correctAnswer);
    });
  }

}

module.exports = Game;