class Turn {
  constructor(guess, cardDetails) {
    this.guess = guess;
    this.cardDetails = cardDetails;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardDetails;
  }

  evaluateGuess() {
    return this.guess === this.cardDetails.correctAnswer;
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
