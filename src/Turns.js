class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
    this.isEvaluated;
  }

  returnGuess() {
    return this.userGuess;
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.userGuess) {
      this.isEvaluated = true;
      return this.isEvaluated;
    } else {
      this.isEvaluated = false;
      return this.isEvaluated;
    }
  }

  giveFeedback() {
    if (this.isEvaluated) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }

}

module.exports = Turn;