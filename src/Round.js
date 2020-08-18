const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0]
    this.turns = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    this.turns.push(turn)
  }
}
module.exports = Round