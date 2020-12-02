class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess;
  };

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess() {
    let guess = this.returnGuess();
    if (guess === this.currentCard.correctAnswer) {
      return true;
    }
    else {
      return false;
    }
  };

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    }
    else {
      return 'incorrect!'
    }
  };
};

module.exports = Turn;
