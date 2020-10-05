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
    return this.card === undefined || null ? false
    : this.guess === this.card.correctAnswer ? true : false;
  }
  giveFeedback() {
    return this.evaluateGuess() === true ? 'Correct!' : 'Incorrect...';
  }
}

module.exports = Turn;
