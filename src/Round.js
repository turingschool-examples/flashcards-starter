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
      return `Great! Your answer of '${guess}' is correct!`
    }
    else if (guess !== this.turn.card["correctAnswer"]) {
      this.incorrectGuesses.push(this.turn.card["id"])
      return `Sorry, your answer of '${guess}' is incorrect.`
    }
  }

  calculatePercentCorrect() {
    let correctCount = correctGuesses.length
    let incorrectCount = incorrectGuesses.length
    let percentageCorrect = correctCount / (correctCount + incorrectCount)
    return percentageCorrect
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
  }
}

module.exports = Round;