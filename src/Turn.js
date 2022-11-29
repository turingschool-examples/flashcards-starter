class Turn {
  constructor(userGuess, currentCard) {
    this.attempt = userGuess
    this.currentCard = currentCard
  }

  returnGuess() {
    return this.attempt
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    if (this.attempt === this.currentCard.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn