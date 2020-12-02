const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(answer) {
    this.answer = answer;
  }
}

module.exports = Turn;