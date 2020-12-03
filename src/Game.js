const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Deck = require('./Deck')
const Card = require('./Card')
const Turn = require('./Turn')
const Round = require('./Turn')

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)

  }

  printQuestion(round) {
    util.main(round);
  }

  start(id, question, answers, correctAnswer, guess, card, turn) {
    card = new Card(id, question, answers, correctAnswer)
    turn = new Turn(guess, card)
    const deck = new Deck()
    const round = new Round(card, turn, turn.guess)
    const currentDeck = deck.createDeck(card)
    return currentDeck
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;