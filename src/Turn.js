class Turn {
  constructor(input, card) {
    this.input = input;
    this.card = card;
  }
  returnGuess() {
    return this.input;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.input === this.card.correctAnswer;
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "Correct!";
    } else {
      return "Incorrect!";
    }
  }
}

module.exports = Turn;
