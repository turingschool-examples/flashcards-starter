const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
    this.turn;
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn(guess) {
    this.turn = new Turn(guess, this.deck.cards[this.turns])
    this.turns++
    this.turn.evaluateGuess()



  }
}

module.exports = Round