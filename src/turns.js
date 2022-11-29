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
  provideFeedback() {
    if (this.evaluateGuess() === true) {
      return "Your answer is correct!";
    } else if (this.evaluateGuess() === false) {
      return "Your answer is incorrect :(";
    }
  }
}

module.exports = Turn;
