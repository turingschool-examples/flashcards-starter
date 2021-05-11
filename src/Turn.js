const Card = require('../src/Card');

class Turn{
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }

  returnGuess() { 
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false
  }

  giveFeedback() {
    if(this.evaluateGuess()){
      return 'correct!'
    } else {
      return 'incorrect!'
    }

    // this.evaluateGuess() === true ? 'correct!' : 'incorrect!'

  }
};

module.exports = Turn