const Card = require('../src/Card');

class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }
}

module.exports = Turn
