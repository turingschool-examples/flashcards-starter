class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    const { correctAnswer } = this.card;
    return correctAnswer === this.guess;
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return `correct!`
    } else {
      return `incorrect!`
    }
  }
}

module.exports = Turn;
