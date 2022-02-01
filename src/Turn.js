class Turn {
  constructor(guess, currentCard) {
    this.guess = guess
    this.currentCard = currentCard
    this.isCorrect = this.evaluateGuess();
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.currentCard
  }
  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      return true
    } else {
      return false
    }
  }
  giveFeedback() {
    if (this.isCorrect) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn