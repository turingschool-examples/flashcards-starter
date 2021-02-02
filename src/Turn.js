class Turn {
  constructor(guess, cardInst) {
    this.userGuess = guess;
    this.card = cardInst;
  }
  
  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.userGuess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (!this.evaluateGuess()) {
      return 'incorrect!';
    } else {
      return 'correct!';
    }
  }
}

module.exports = Turn;