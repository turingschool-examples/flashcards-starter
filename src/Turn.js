const Card = require('../src/Card')

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
    if (this.userGuess === this.card.correctAnswer) {
      return true 
    } else {
      return false 
    }
  }
  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn 