const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')

class Game {
  constructor() {
    this.roundNumber = 0;
    this.second = 0
    this.counter;
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start(currentDeck = prototypeQuestions[this.roundNumber]) {
    this.startTimer()
    this.counter
    var deck = new Deck(currentDeck.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer)))
    var round = new Round(deck, this)
    this.currentRound = round;
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  addRound() {
    this.roundNumber ++
  }

  startTimer() {
    this.counter = setInterval(() => this.addSecond(), 1000)
  }

  addSecond() {
    this.second++
  }

  stopTimer() {
    console.log(`You completed the dataset in ${this.checkTime()}`)
    clearInterval(this.counter)
    this.second = 0
  }

  checkTime() {
    if (this.second > 60) {
      return `${(this.second / 60).toFixed(2)} minutes!!`
    } else {
      return `${this.second} seconds!!`
    }
  }
}
module.exports = Game;