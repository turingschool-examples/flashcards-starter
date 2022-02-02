const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor() {
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

  shuffleDeck() {
    const allCards = prototypeQuestions.map(flashcard => {
      return new Card(
        flashcard.id,
        flashcard.question,
        flashcard.answers,
        flashcard.correctAnswer,
      )
    })
    const shuffledArray = allCards.sort((a, b) => 0.5 - Math.random())
    this.currentDeck = new Deck(shuffledArray)
  }  

  createRound() {
    const round = new Round(this.currentDeck)
    this.currentRound = round
  }
}

module.exports = Game