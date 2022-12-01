const data = require('./data');
// const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = 0
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
   printQuestion(round) {
      util.main(round);
  }
  setUpFunctions() { 
    this.deck = new Deck()
    this.round = new Round(this.deck)
  }
  start() {
    this.setUpFunctions()
    this.printMessage(this.deck,this.round)
    this.printQuestion(this.round)
  }
}

module.exports = Game;