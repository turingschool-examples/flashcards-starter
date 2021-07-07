const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round);
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    // this.currentRound;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  //can/does this need to be async?
  start() {
    //create cards
    //will put cards in a deck
    //will invoke the print and printQuestion
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck.cards);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;