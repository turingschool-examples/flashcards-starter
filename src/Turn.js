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
    return this.userGuess === this.card.correctAnswer
  }
  giveFeedback() {
    if (!this.evaluateGuess()) {
      return 'incorrect!'
    } else {
      return 'correct!'
    }
  }
}



module.exports = Turn;
