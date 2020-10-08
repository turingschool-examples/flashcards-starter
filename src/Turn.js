class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess,
    this.currentCard = currentCard
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
}

module.exports = Turn;