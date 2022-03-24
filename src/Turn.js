class Turn {
  constructor(guess, card) {
this.guess = guess
this.CardinPlay = card
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    this.guess === this.card.correctAnswer
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    }
    return 'incorrect!'
  }
}

module.exports = Turn;
