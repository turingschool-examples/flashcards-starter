class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }
  returnGuess(){
    return this.userGuess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    if (this.userGuess === this.currentCard.correctGuess) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback(evaluateGuess) {
    if (true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}