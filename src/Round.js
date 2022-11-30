const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
    this.turn;
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    this.turn = new Turn(guess, this.deck.cards[this.turn])
    this.turns++
  }
}

module.exports = Round