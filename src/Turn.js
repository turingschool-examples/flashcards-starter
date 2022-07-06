const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
       return true;
    } else {
       return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
        return 'Correcto-mundo!';
    } else {
        return 'That\'s incorrect, try again.'
    }
  }
}

module.exports = Turn;
