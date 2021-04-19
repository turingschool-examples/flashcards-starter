class Turn {
  constructor(guess, card) {
    this.guess = guess,
    this.card = card
  }

  returnCard() {
    return this.card
  }

  returnGuess() {
    return this.guess
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn