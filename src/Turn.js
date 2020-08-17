const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.returnGuess = () => {
      return guess;
    }
    this.returnCard = () => {
      return card;
    }
  }
}

  
module.exports = Turn;