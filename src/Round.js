const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
   this.turns = 0
   this.incorrectGuesses = []
   this.deck = deck
  //  this.currentCard = this.deck[0]
  }
  returnCurrentCard(deck) {
    return deck.newDeck[0]
  }
  takeTurn(userChoice) {
    let newTurn = new Turn(userChoice, this.deck)
    this.turns += 1
    newTurn.evaluateGuess()
    if (newTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck.newDeck[0].id)
    }
    let feedback = newTurn.giveFeedback()
    this.deck.newDeck.shift()
    // console.log("feedback +++++++",feedback)
    return feedback
  }
  calculatePercentCorrect() {
    let percent = this.incorrectGuesses.length / this.turns
    percent = percent * 100
    // console.log("this.incorrectGuesses", this.incorrectGuesses.length)
    // console.log("this.turns", this.turns)
    return Math.floor(percent)
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round 