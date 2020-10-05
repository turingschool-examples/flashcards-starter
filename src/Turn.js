const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.card = card
    if (typeof guess !== 'string') {
      this.guess = `${guess}`;
    } else {
      this.guess = guess;
    }
  }
}

module.exports = Turn;
