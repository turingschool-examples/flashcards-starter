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
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.guessStatus = true;
    }
    giveFeedback(guessStatus);
  }
  giveFeedback(status) {
    if (status === false) {
      return 'incorrect!';
    } else {
      return 'correct!';
    }
  }
}

module.exports = Turn;
