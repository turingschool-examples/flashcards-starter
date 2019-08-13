class Turn {
  constructor(guess, cardObj) {
    this.guess = guess;
    this.card = cardObj;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  }

}

module.exports = Turn;
