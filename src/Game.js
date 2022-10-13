const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('./Round')
const Card = require('./Card')
const Deck = require('./Deck')

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
  makeDeck() {
    return new Deck(this.createCard())
  }
  createRound() {
    this.currentRound = new Round(this.makeDeck())
    return this.currentRound
  }
  start() {
    this.printMessage(this.makeDeck(), this.createRound())
    this.printQuestion(this.createRound())
  }
}

module.exports = Game;