const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    this.currentCard = this.deck[this.turns]
  }
  takeTurn(guess) {
    this.returnCurrentCard() 
    this.turns++
    const currentTurn = new Turn(guess, this.currentCard)
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentTurn.id)
      return currentTurn.giveFeedBack()
    } else {
      return currentTurn.giveFeedBack()
    }
  }
  calculatePercentCorrect() {
    return Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100)
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round