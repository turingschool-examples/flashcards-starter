const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck.cardCollection
    this.turns = 0
    this.currentCard = this.deck[this.turns]
    this.incorrectGuesses = []
  }
  returnCurrentCard = () => {
    return this.currentCard
  }
  takeTurn = (guess) => {
    let turn = new Turn(guess, this.currentCard)
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
    }
    this.turns++
    this.currentCard = this.deck[this.turns]
    return turn.giveFeedback()
  }
  calculatePercentCorrect = () => {
    if (this.turns === 0 && this.incorrectGuesses.length === 0) {
      return 0
    }
    return 100 - Math.round((this.incorrectGuesses.length/this.turns)*100)
  }
  endRound = () => {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round