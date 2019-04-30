class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.currentCard.correctAnswer === this.userGuess) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(answer) {
    if (answer) {
      return 'You got it!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;