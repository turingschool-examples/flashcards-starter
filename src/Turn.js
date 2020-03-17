class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.cardInstance = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInstance;
  }

  evaluateGuess() {
    if (this.guess === this.cardInstance.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  
  giveFeedback() {
    if (this.evaluateGuess) {
      return "correct!";
    } else {
      return "incorrect!"
    }
  }
}

module.exports = Turn;
