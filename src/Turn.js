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
    return Boolean(this.guess === this.card.correctAnswer);
  }

  giveFeedback() {
    switch (this.evaluateGuess()) {
      case false:
        return "Incorrect -__-";
      case true:
        return "Correct ^__^";
      default:
        return "Incorrect -__-";
    }
  }
}

module.exports = Turn;
