class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'You got it right...lucky guess' : 'Sorry, bud.  Better luck next time.'
  }
}

module.exports = Turn