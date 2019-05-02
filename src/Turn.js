class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    return this.userGuess === this.currentCard.correctAnswer ? true : false;
  }
  giveFeedback() {
    return this.userGuess === this.currentCard.correctAnswer ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;