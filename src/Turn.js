class Turn {
  constructor(guess, currentCard) {
    this.guess = guess
    this.card = currentCard
  }
  returnGuess = () => {
    return this.guess
  }
  returnCard = () => {
    return this.card
  }
  evaluateGuess = () => {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
  }
  giveFeedback = () => {
    let guess = this.evaluateGuess()
    if (guess === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn