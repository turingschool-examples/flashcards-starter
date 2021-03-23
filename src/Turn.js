class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }

  returnUserGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.userGuess === this.card.correctAnswer;
  }

  giveFeedback() {
    if (this.userGuess === this.card.correctAnswer) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}

module.exports = Turn;