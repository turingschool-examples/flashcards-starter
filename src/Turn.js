class Turn {
  constructor(userGuess, cardObj) {
    this.userGuess = userGuess;
    this.cardObj = cardObj;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.cardObj;
  }

  evaluateGuess() {
    return this.userGuess === this.cardObj.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn;