const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

var Card = require('../src/Card');
var Deck = require('../src/Deck');
var Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
  }
  // returnCurrentRound() {
  //   return this.currentRound;
  // }
  startGame() {

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
