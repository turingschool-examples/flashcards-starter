class Turn {
  constructor(guess, card) {
    this.guess = guess,
    this.card = card,
    this.evaluation = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.evaulation = (this.card.correctAnswer === this.guess) ? true : false;
  }
}

module.exports = Turn;