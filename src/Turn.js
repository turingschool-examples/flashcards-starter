class Turn {
  constructor(usersGuess, currentCard) {
    this.usersGuess = usersGuess;
    this.currentCard = currentCard;
  }
  returnGuess() {
    return this.usersGuess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    return this.usersGuess === this.currentCard.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;