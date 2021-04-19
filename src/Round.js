const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }

  currentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard())
    if (!turn.isGuessCorrect()) this.incorrectGuesses.push(this.currentCard().id)
    this.turns += 1
    return turn.giveFeedback()
  }

  percentCorrect() {
    return Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
  }

  endRound() {
    return '** Round over! ** You answered ${this.percentCorrect()}% of the questions correctly!'
  }
}

module.exports = Round