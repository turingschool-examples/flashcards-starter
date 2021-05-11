const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Round {
  constructor(argument) {
    this.deck = argument.stack;
    this.currentCard = this.deck[0];
  }
}

module.exports = Round;