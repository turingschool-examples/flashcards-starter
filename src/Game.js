const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require("../src/Round");

class Game {
  constructor() {
  }
  start() {
    //create Cards
    //put cards in deck
    currentRound();
    printMessage();
    printQuestion();
  }

  currentRound() {
    let currentRound = new Round(deck);
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
