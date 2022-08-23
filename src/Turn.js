const Card = require('../src/Turn')

class Turn {
  constructor(userGuess, card) {
    this.guess = userGuess;
    this.evaluate = false;
    this.card = card;
    this.incorrectGuesses = [];
    this.feedback = "";
  }
  returnGuess(guess) {
    this.guess = guess;
    return this.guess;

  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      return true;
    }
    return false;
  }

  giveFeedback(feedback) {
    this.feedback = feedback;
    return this.feedback;
  }

}

module.exports = Turn;
