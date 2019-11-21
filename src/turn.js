class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.card = card
  }

  returnGuess() {
    return this.guess;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    return false;
  }

  returnCard(card) {
    return card;
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return `YAAS QUEEN`;
    }
    return `FAIL`;
  }
}

module.exports = Turn;
