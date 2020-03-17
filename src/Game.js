const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
// should keep track of the currentRound
class Game {
  constructor() {

  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  start() {
  // starts everything
    // creates Cards
    // puts Cards in a Deck
    // creates new Round using the Deck
    printMessage(deck, round)
    printQuestion(round)
  }
}

module.exports = Game;
