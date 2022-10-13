const data = require('./data');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(data) {
    this.data = data
    this.currentRound
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
  createCard() {
    return this.data.map((cardInfo) => {
      return new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)
    })
  }
  createDeck() {
    return new Deck(this.createCard())
  }
  createRound() {
    return this.currentRound = new Round(this.createDeck())
  }
  start() {
    this.printMessage(this.createDeck(), this.createRound)
    this.printQuestion(this.createRound())
  }
}

module.exports = Game;