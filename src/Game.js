const data = require('./data');
const util = require('./util');

const Deck = require("./Deck");
const Round = require('../src/Round');

const prototypeQuestions = data.prototypeData;


class Game {
  constructor() {
    this.gamesPlayed = 0;
  }

  startGame() {
    let deck = new Deck(prototypeQuestions);
    let round = new Round(deck);
    this.gamesPlayed = round
    this.printMessage(deck)
    this.printQuestion(round);
    return 
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! 
      You are playing with ${deck.countingCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;