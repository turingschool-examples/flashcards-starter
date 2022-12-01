const data = require('./data');
const prototypeQuestions = data.prototypeData;
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
  playGame() {
    this.start()
    console.log(this.round.calculatePercentCorrect())
    if (this.round.calculatePercentCorrect() < 90) {
      console.log(`Sorry, you got less than 90%, try this deck again`)
      this.start()
    } else {
      console.log(`Congrats! You passed!`)
    }
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