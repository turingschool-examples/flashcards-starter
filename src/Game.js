const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor() {
    this.currentIndexes = this.getThreeIndexes()
    this.currentDeck = null
    this.currentRound = null
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round)
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
  }

  getThreeIndexes() {
    let indexes = []
    do {
      let indexToAdd = this.getRandomIndex(prototypeQuestions)
      if (!indexes.includes(indexToAdd)) {
        indexes.push(indexToAdd)
      }
    } while (indexes.length < 3)
    return indexes
  }
}

module.exports = Game
