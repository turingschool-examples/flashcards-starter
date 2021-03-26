class Turn {
  constructor(userGuess, card) {
    this.guess = userGuess;
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
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }
}

module.exports = Turn;
