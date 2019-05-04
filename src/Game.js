const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = prototypeQuestions;
    this.start();
  }

  start() {
    const deck = this.createNewDeck(this.currentRound[0]);
    const round = this.createNewRound(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  // createNewCards() {
  //   this.currentRound = prototypeQuestions.map(el => {
  //     return new Card(el.id, el.question, el.answers, el.correctAnswer);
  //   });
  // }

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