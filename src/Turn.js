class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.userGuess === this.card.correctAnswer) {
        return true;
    } else {
        return false;
    }
  }

  giveFeedback() {
    if (this.userGuess === this.card.correctAnswer) {
        return "Correct!"
    } else {
        return "Incorrect!"
    }
  }
}

module.exports = Turn; 