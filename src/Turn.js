class Turn {
  constructor(guess, card) {
    this.guess = guess,
    this.card = card
  }

  isGuessCorrect() {
    return this.guess === this.card.correctAnswer
  }

  giveFeedback() {
    return this.isGuessCorrect() ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn