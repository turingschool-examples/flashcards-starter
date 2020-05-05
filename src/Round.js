const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards
    // this.currentCard = this.deck[this.turns]
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[this.turns])
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.deck[this.turns].id) : null
    this.turns++

    return turn.giveFeedback()
  }

  calculatePercentage() {
    let correct = this.deck.length - this.incorrectGuesses.length
    let percent = (correct / this.deck.length) * 100
    return Number(percent.toFixed(2))
  }

  endRound() {
    let percent = this.calculatePercentage()
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`)
  }

}

module.exports = Round