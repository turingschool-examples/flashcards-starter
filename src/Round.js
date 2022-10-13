const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    this.turn;
    this.correctGuesses = []
    this.incorrectGuesses = []
  }
  
  returnCurrentCard() {
    return this.deck.cards[turnCount]
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.returnCurrentCard())
    this.turnCount++

    if (guess === this.turn.card["correctAnswer"]) {
      this.correctGuesses.push(this.turn.card["id"])
    }
    else if (guess !== this.turn.card["correctAnswer"]) {
      this.incorrectGuesses.push(this.turn.card["id"])
    }
  }
}

module.exports = Round;