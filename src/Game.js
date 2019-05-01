const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')

class Game {
  constructor() {
    this.currentRound = 0;
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    var deck = new Deck();
    prototypeQuestions.map(question => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer)
      deck.cards.push(card)
    })
    var round = new Round(deck)
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;