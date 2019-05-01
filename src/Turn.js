class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.currentCard = card;
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

  giveFeedback() {
    if (this.currentCard.correctAnswer === this.userGuess) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;