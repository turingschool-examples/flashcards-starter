const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck[this.turns]
  }
  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard)
    this.turns++

    this.currentCard = this.deck[this.turns]
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedBack()
    } else {
      return turn.giveFeedBack()
    }
  }
  calculatePercentCorrect() {
    return Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100)
  }
  endRound() {
    this.checkScore()
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

  checkScore() {
    if (this.calculatePercentCorrect() < 90 && this.turn === this.deck.length) {  
      console.log(`** Start over! ** You only answered ${this.calculatePercentCorrect()}% correctly`)
      this.turns = 0
      this.incorrectGuesses = []
      console.log(this.incorrectGuesses)
      this.currentCard = this.deck[0]
    } else {
      console.log(this.incorrectGuesses.length)

      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }
}

module.exports = Round