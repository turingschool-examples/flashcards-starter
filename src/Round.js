const Turn = require("./Turn.js")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount]
  }

  takeTurn(guess) {
    var newTurn = new Turn(guess, this.returnCurrentCard())
    this.turnCount ++
    return newTurn.giveFeedback()


  }
}


module.exports = Round;
