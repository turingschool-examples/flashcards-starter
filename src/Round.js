const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.deck.cards[0])
    return turn
  }
}

module.exports = Round
//