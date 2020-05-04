const Card = require('../src/Card');

class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }
  returnGuess() {
    return this.userGuess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
  }
  giveFeedback() {

  }
}

module.exports = Turn;
