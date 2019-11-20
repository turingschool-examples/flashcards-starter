class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.match = false;
    this.feedback = '';
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.match = true;
    } else {
      this.match = false;
    }
  }

  giveFeedback() {
    if (this.match) {
      return this.feedback = 'correct!';
    } else {
      return this.feedback = 'incorrect!';
    }
  }
}

module.exports = Turn;
