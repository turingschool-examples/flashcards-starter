const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[0])
    this.turns++
    this.deck.shift()
    return turn
  }
}
module.exports = Round