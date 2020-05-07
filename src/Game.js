const data = require('./data');
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
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
    this.currentRound = new Round(deck)
    this.currentRound.startTimer()
    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;