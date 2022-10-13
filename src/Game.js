const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  newDeck() {
    const cardArray = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))
    return new Deck(cardArray)
  }

  newRound() {
    this.currentRound = new Round(this.newDeck())
  }

  start() {
    this.newRound()
    this.printMessage(this.currentRound.deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
 
}

module.exports = Game;