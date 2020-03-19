class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.cardInstance = card;
    this.isCorrect = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInstance;
  }

  evaluateGuess() {
    if (this.guess === this.cardInstance.correctAnswer) {
      this.isCorrect = true;
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.isCorrect) {
      return "correct!";
    } else {
      return "incorrect!"
    }
  }
}

module.exports = Turn;
