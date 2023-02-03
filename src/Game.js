const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck')
const Round = require('./Round')


class Game {
  constructor() {
    this.round = 0
    this.cards = []
    this.deck
  }

  start() {
    for(var i = 0; i < 10; i++) {
      this.cards.push(prototypeQuestions[this.randomCard()])
    }

    this.deck = new Deck(this.cards)

    const round = new Round(this.deck)
    
    this.printMessage()
    this.printQuestion(round)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${this.deck.countCards()} cards.
-----------------------------------------------------------------------`)
    return 'printed'
  }

  printQuestion(round) {
      util.main(round);
      return 'printed'
  }

  randomCard() {
    var num = Math.floor(Math.random() * prototypeQuestions.length)
    return num
  }

  test() {
    for(var i = 0; i < 10; i++) {
      this.cards.push(prototypeQuestions[this.randomCard()])
    }
    this.deck = new Deck(this.cards)
  }

  printMessageTest() {
    return 'printed'
  }

  printQuestionTest() {
    return 'called util'
  }
}

module.exports = Game;