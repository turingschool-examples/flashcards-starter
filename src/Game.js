const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.roundCounter = 0;
    this.countCards = 0
    this.start();    
  }

  start() {
    const deck = new Deck(prototypeQuestions[this.roundCounter]);
    const round = new Round(deck, this);
    this.countCards = deck.countCards();
    this.printMessage(deck)
    this.printQuestion(round)
  }

 
  printMessage(deck) {
    if (this.roundCounter === 0) {
    console.log(`Welcome to FlashCards! You are playing
    ${prototypeQuestions.length} rounds, the first round will be 
    ${this.countCards} cards.
-----------------------------------------------------------------------`)
  } 
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;