const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
  constructor(id) {
    this.id = id;
  }
}

module.exports = Card;