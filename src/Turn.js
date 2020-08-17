const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.returnGuess = () => {
      return guess;
    }
  }
}

  
module.exports = Turn;