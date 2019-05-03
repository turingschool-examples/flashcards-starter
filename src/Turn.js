class Turn {
  constructor(card, guess) {
    this.card = card;
    this.guess = guess;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return this.card.correctAnswer === this.guess ? true : false;
  }
  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect';
  }
}

module.exports = Turn;