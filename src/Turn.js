const Card = require('../src/Card');

class Turn {
  constructor() {
   }
    returnGuess = (guess) => {
      return guess;
    }
    returnCard = (card) => {
      return card;
    }
    evaluateGuess = (guess, card) => {
      return (guess === card.correctAnswer) 
    }
    giveFeedback = (value) => {
      return value ? 'correct!' : 'incorrect!';
    }
  }
module.exports = Turn;