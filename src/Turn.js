const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.returnGuess = () => {
      return guess;
    }
    this.returnCard = () => {
      return card;
    }
    this.evaluateGuess = () => {
      return (guess === card.correctAnswer) 
    }
    this.giveFeedback = () => {
      return guess ? 'correct!' : 'incorrect!';
    }
  }
}

  
module.exports = Turn;