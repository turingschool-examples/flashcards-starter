const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound = {}
  }

  start() {
    let cards = prototypeQuestions.map((stuff)=> {
      let card = new Card (stuff.id, stuff.question, stuff.answers, stuff.correctAnswer)
      return card
    })
    let deck = new Deck(cards)
    let round = new Round(deck)
    this.printMessage(deck, round)
    this.printQuestion(round)
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
