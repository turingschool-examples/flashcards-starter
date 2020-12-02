class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
    this.turnCount = 0;
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess(currentGuess) {
    if (this.guess === currentGuess) {
      this.response = true
      return true
    } else {
      this.response = false
      return false
    }
  }

  giveFeedback() {
    if (this.response === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn