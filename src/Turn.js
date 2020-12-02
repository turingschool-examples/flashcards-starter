const Turn = class {
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
    return (this.guess === this.card.correctAnswer) ? true : false;
  }

  giveFeedback() {
    return (this.evaluateGuess() === true) ? 'You got it!' : 'Not even close!';
  }
}

module.exports = Turn;