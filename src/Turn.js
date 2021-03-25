class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    const { correctAnswer } = this.currentCard;
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
