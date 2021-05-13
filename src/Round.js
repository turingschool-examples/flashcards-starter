const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck[0]
  }
  returnCurrentCard() {
    if (!this.currentCard) {
      this.currentCard = this.deck[this.turns]
      return this.currentCard
    }
    return this.currentCard
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard)
    this.currentCard = this.deck[this.turns]
    this.turns++
  
    console.log(this.currentCard)


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
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round