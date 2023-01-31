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
    if (this.usersGuess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.usersGuess === this.currentCard.correctAnswer) {
      return "Correct!";
    } else {
      return "Incorrect!";
    }
  }
}

module.exports = Turn;
