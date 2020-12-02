const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
  constructor(id, question) {
    this.id = id;
    this.question = question;
  }
}

module.exports = Card;