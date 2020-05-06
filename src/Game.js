const data = require('./data');
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0
    this.round;
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = data.prototypeData.map(({id, question, answers, correctAnswer}) => {
      return new Card(id, question, answers, correctAnswer)
    }) 
    const deck = new Deck(cards)
    this.round = new Round(deck)
    this.round.startTimer()
    this.printMessage(deck, this.round)
    this.printQuestion(this.round)
  }
}

module.exports = Game;