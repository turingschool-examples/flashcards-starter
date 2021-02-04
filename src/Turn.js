class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.card = currentCard;
    this.solved = false;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.userGuess === this.card.correctAnswer) {
      this.solved = true;
      return this.solved;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.solved === true) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
}

module.exports = Turn;
