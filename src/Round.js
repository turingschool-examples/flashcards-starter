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
    let currentTurn = new Turn(guess, this.currentCard)
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentTurn.guess)
      return currentTurn.giveFeedBack()
    } else {
      return currentTurn.giveFeedBack()
    }
  }
  calculatePercentCorrect() {
    const correctGuesses = this.turns - this.incorrectGuesses.length
    return Math.round(correctGuesses / this.turns * 100)
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round