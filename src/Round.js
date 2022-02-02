const Turn = require("./Turn.js")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    this.currentCard
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turnCount]
    return this.deck.cards[this.turnCount]
  }

  takeTurn(guess) {
    var newTurn = new Turn(guess, this.returnCurrentCard())
    if (!newTurn.evaluateGuess()){
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.turnCount ++
    return newTurn.giveFeedback()
  }
}


module.exports = Round;
