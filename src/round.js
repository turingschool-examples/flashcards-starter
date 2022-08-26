const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.currentCard = deck.cards[0]
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(newTurn) {
    this.turns ++;
    this.currentCard = this.deck[this.turns]
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(newTurn.card.id)
    }
    return newTurn.giveFeedback()
  }
  calculatePercentCorrect() {
    const perCorrect = (this.turns - this.incorrectGuesses.length) / this.turns *100
    
    return Math.round(perCorrect)
  }
  endRound() {
    if (this.deck.length === this.turns !== 0) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }
}

module.exports = Round;