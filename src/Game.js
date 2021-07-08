const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    //set this to a data type it will eventually be...
    this.currentRound;
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    //this does deck.cards...so need to test this way.
    this.currentRound = new Round(deck.cards);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
  
}

module.exports = Game;