class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.guessStatus = false;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  giveFeedback() {
    if (this.guessStatus === false) {
      return 'incorrect!';
    } else {
      return 'correct!';
    }
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.guessStatus = true;
    }
    this.giveFeedback();
  }
}

module.exports = Turn;
