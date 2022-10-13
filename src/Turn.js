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


    if (this.userGuess === this.card.newDeck[0].correctAnswer) {
      return true
    } else {
      return false
    }
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else if (!this.evaluateGuess()) {
      return 'incorrect!'
    }
  }
}

module.exports = Turn 