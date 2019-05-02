const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.round = {}
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start() {
    let cards = prototypeQuestions.map((thing)=> {
    let card = new Card (thing.id, thing.question, thing.answers, thing.correctAnswer)
      return card
    })
    let deck = new Deck(cards)
    let round = new Round(deck)
    // this.printMessage(deck, round)
    // this.printQuestion(round)
  }
}

module.exports = Game;