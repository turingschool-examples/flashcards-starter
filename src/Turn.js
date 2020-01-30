const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

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
    return (this.guess === this.card.correctAnswer) ? true : false;
  }
  giveFeedback() {
    return (this.evaluateGuess()) ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;
