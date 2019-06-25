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
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "Great Job! You're a rockstar!"
    } else {
      return 'Try again.'
    }
  }
}

module.exports = Turn;