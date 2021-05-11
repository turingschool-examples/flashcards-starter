const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Deck {
  constructor(cards) {
    this.stack = cards;
  }
  countCards() {
    return this.stack.length
  }
}

module.exports = Deck;