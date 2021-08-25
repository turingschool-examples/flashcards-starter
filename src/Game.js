const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');


class Game {
  constructor() {
    this.currentDeck = {};
    this.currentRound = {};
  }
  start() {
    // let deck = new Deck(prototypeQuestions.map(element =>
    //   new Card(element.id, element.question, element.answers, element.correctAnswer)))
    // let round = new Round(deck);

    this.newDeck();
    this.newRound(this.currentDeck);
    // this.currentRound = round;
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  newDeck() {
    this.currentDeck = new Deck(prototypeQuestions.map(element =>
      new Card(element.id, element.question, element.answers, element.correctAnswer)))
  }

  newRound(deck) {
    this.currentRound = new Round(deck);
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
