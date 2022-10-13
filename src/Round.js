const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
   this.turns = 0
   this.incorrectGuesses = []
   this.deck = deck
  //  this.currentCard = this.deck.newDeck[0]
  }
  // returnCurrentCard() {
  //   // return deck.newDeck[0]
  //   console.log("LOOK HERE ++++++",this.currentCard)
  //   return this.currentCard
  // }
  returnCurrentCard(deck) {
    return this.deck.newDeck[0]
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
    return feedback
  }
  calculatePercentCorrect() {
    this.correctGuesses = this.turns - this.incorrectGuesses.length
    let percent = this.correctGuesses / this.turns
    percent = percent * 100
    return Math.floor(percent)
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}


module.exports = Round 