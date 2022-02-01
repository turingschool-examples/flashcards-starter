/* eslint-disable no-console */
class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  
  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    return false
  }

  giveFeedback() {
    return (this.evaluateGuess() === true ? 'correct!' : 'incorrect!');
  }

}


module.exports = Turn;