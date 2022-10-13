const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round')

class Game {
  constructor() {
    this.cards = []
    this.currentRound = null
  }

  start() {
    prototypeQuestions.forEach(flashCard => {
      let card = new Card(flashCard.id, flashCard.question, flashCard.answers, flashCard.correctAnswer)
      this.cards.push(card)
    })
    this.deck = new Deck(this.cards)
    this.round = new Round(this.deck)
    this.currentRound = this.round
    this.printMessage(this.deck, this.round)
    this.printQuestion(this.round)
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