const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')

class Game {
  constructor() {
    this.roundNumber = 0;
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(currentDeck = prototypeQuestions[this.roundNumber]) {
    var deck = new Deck(currentDeck.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer)))
    var round = new Round(deck, this)
    this.currentRound = round;
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  addRound() {
    this.roundNumber ++
  }
}
module.exports = Game;