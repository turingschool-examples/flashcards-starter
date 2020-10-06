class Turn {
  constructor(guess, card) {
    this.card = card
    if (typeof guess !== 'string') {
      this.guess = `${guess}`;
    } else {
      this.guess = guess;
    }
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    return false;
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return 'correct!';
    }
    return 'incorrect!';
  }
}

module.exports = Turn;
