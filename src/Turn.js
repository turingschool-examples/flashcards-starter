const Card = require('../src/Card');

class Turn{
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }
}

module.exports = Turn