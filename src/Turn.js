class Turn {
  constructor(userGuess, card){
    this.guess = userGuess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if(this.guess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    const currentGuess = this.evaluateGuess();
    if(currentGuess === true) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
