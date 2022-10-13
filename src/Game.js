const data = require('./data')
const prototypeQuestions = data.prototypeData
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const util = require('./util')

class Game {
  constructor() {
    this.currentRound
  }

  createCards(questions) {
    return questions.map((question) => {
      return new Card(
        question.id,
        question.question,
        question.answers,
        question.correctAnswer
      )
    })
  }

  createRound() {
    const cards = this.createCards(prototypeQuestions)
    const deck = new Deck(cards)
    const round = new Round(deck)

    this.currentRound = round
  }

  start() {
    this.createRound()

    this.printMessage(this.currentRound.deck)

    this.printQuestion(this.currentRound)
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards ♥️ ! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round)
  }
}

module.exports = Game
