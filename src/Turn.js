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
    if(this.userGuess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    if(this.userGuess === this.card.correctAnswer) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
