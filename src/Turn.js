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
}

module.exports = Turn;
