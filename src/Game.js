const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require("./Deck");
const Round = require("./Round");

class Game {
  constructor(deckData) {
    this.currentRound;
    this.deckData = deckData;
  }
  start() {
    let deck = new Deck(this.deckData);
    this.currentRound(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  currentRound(deck) {
    let currentRound = new Round(deck);
    this.currentRound = currentRound;
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
