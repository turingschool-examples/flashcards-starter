class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
     return true
    } else {
     return false
    }
  };

  giveFeedback() {
    if (this.evaluateGuess()) {
      return `Your answer of ${this.guess} is correct!`
  } else {
      return `Your answer of ${this.guess} is incorrect!`
    }
  };
}


module.exports = Turn;
