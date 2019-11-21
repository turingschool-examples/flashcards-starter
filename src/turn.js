class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.card = card
  }

  returnGuess() {
    return this.guess;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  returnCard(card) {
    return card;
  }

  giveFeedback() {
    return this.guess === this.card.correctAnswer ? `YAAS` : `FAIL`;
  }
}

module.exports = Turn;
