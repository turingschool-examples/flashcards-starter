const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
   this.guess = guess
   this.cardInPlay = card
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.cardInPlay
  }
  evaluateGuess() {
    return this.guess === this.cardInPlay.correctAnswer;
    // if (this.guess === this.cardInPlay.correctAnswer) {
    // } else {
    //   return 'Hello'
    // }

  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
    return 'incorrect!'
   }
  }
}

module.exports = Turn;
