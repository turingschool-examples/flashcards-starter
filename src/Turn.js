class Turn {
  constructor(userGuess, cardObject) {
    this.guess = userGuess
    this.card = cardObject
  }

  returnGuess() {
    return this.guess
  }
  
  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}




module.exports = Turn