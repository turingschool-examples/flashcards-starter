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

  evaluateGuess(card) {
    return this.guess === card.correctAnswer ? true : false;
  }

  giveFeedback(card) {
    return this.guess === card.correctAnswer ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;