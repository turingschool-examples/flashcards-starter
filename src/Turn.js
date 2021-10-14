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
    if (this.userGuess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    let feedback = 'incorrect!';
    if (this.evaluateGuess()) {
      feedback = 'correct!';
    }
    return feedback;
  }
}

module.exports = Turn;