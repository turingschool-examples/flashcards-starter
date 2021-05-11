const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Round {
  constructor(thisDeck) {
    this.deck = thisDeck;
  }
}

module.exports = Round;