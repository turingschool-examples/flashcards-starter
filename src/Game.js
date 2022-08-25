const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')


class Game {
  constructor(data) {
    this.currentRound = null
    this.data = data || prototypeQuestions


  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(){
    const deck = new Deck(prototypeQuestions)
    this.currentRound = new Round(deck)

    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)

  }
}

module.exports = Game;
