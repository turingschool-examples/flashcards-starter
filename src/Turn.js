const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess, thisCard) {
    this.guess = guess;
    this.card = thisCard;
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
}

module.exports = Turn;