const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess, thisCard) {
    this.guess = guess;
    this.card = thisCard;
    this.match;
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.match = true;
    } else {
      this.match = false;
    }
    return this.match
  }
  giveFeedback() {
    if (this.match) {
      return `correct!`
    } else {
      
    }
  }
}

module.exports = Turn;