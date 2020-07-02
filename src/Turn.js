class Turn {
  constructor(guess, card) {
    this.guess = guess,
    this.card = card,
    this.evaluation = false;
    this.feedback = "";
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      return this.evaluation = true;
    }
  }

  giveFeedback() {
    return this.feedback = (this.evaluation === true) ? 'correct' : 'incorrect';
  }
}

module.exports = Turn;