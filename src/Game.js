const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Card = require("./Card");

class Game {
  constructor() {
    this.storedCards = [];
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
