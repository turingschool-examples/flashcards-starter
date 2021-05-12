const Turn = require("../src/Turn.js");

class Round{
  constructor(deck) {
    this.deck = deck
    this.currentCard = this.deck.cards[0]
    this.turns = 0
    this.incorrectGuesses = []

  }

  returnCurrentCard() {

    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    turn.evaluateGuess()
    this.turns++
  }

  calculatePercentCorrect() {

  }
}

module.exports = Round