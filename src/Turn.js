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
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    return false;
  }
  giveFeedback(result) {
    if (result === true) {
      return "correct!";
    }
    return "incorrect!";
  }
}

module.exports = Turn;
