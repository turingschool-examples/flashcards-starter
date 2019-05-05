const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.gameCounter = 0;
    // this.currentRound;
    // this.start();
  }

  start() {
    const deck = new Deck(prototypeQuestions[this.gameCounter]);
    // console.log(deck);
    console.log(this.gameCounter);
    const round = new Round(deck, this);
    // console.log(round);
    this.printMessage(deck);
    this.printQuestion(round);
  }

  // createNewCards() {
  //   this.currentRound = prototypeQuestions.map(el => {
  //     return new Card(el.id, el.question, el.answers, el.correctAnswer);
  //   });
  // }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;