const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess) {
    this.guess = guess;
  }
}

module.exports = Turn;