class Turn {
  constructor(guess, card) {
    this.invalidInput = false;
    this.guess = this.validateGuess(guess)
    this.card = this.validateCard(card)
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return this.card === undefined || null ? false
    : this.guess === this.card.correctAnswer;
  }
  giveFeedback() {
    return this.evaluateGuess() === true ? 'Correct!' : 'Incorrect...';
  }
  validateGuess(guess) {
    return guess === undefined ? this.invalidInput = true : guess.toString();
  }
  validateCard(card) {
    return card instanceof Card ? card : this.invalidInput = true;
  }
}

module.exports = Turn;
const Card = require('../src/Card');
