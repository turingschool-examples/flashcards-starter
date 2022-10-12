const Card = require('../src/Card')
const Round = require('./Round')

class Turn {
  constructor(userGuess, cardObject) {
    this.userGuess = userGuess
    this.card = cardObject

  }
  returnGuess() {
    return this.userGuess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    // console.log("Correct answer++++++",this.card.newDeck[0].correctAnswer)
    // console.log("User guess +++++", this.userGuess)
    // console.log("result ++++", this.userGuess === this.card.newDeck[0].correctAnswer)

    if (this.userGuess === this.card.newDeck[0].correctAnswer) {
      return true 
    } else {
      return false 
    }
  }
  giveFeedback() {
    // console.log(this.currentCard)
    // console.log("evaluate guess ++++", this.evaluateGuess())
    if (this.evaluateGuess()) {
      return 'correct!'
    } else if (!this.evaluateGuess()) {
      return 'incorrect!'
    }
  }
}

module.exports = Turn 