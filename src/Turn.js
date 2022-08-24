class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if(this.userGuess === this.currentCard.correctAnswer) {
      return true;
    }
    return false;
  }

  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'You right'
    }
    return 'You wrong'
  }

}

module.exports = Turn;
