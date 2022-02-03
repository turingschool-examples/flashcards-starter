const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turns])
    currentTurn.evaluateGuess()
    this.turns++
    if (currentTurn.isCorrect) {
      currentTurn.currentCard = this.deck.cards[this.turns]
      return currentTurn.giveFeedback()
    } else {
      this.incorrectGuesses.push(currentTurn.currentCard.id)
      currentTurn.currentCard = this.deck.cards[this.turns]
      return currentTurn.giveFeedback()
    }
  }
  calculatePercentCorrect() {
    return Math.floor(100 * (1 - this.incorrectGuesses.length / this.turns))
  }
  
  endRound() {
    console.log(
      `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    )
  }
}

module.exports = Round