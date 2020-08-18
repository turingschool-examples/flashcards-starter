const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = []
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[0])
    this.turns.push(turn)
    this.deck.shift()
  }
}
module.exports = Round