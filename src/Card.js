const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
  constructor(id, question, answers) {
    this.id = id;
    this.question = question;
    this.answers = answers;
  }
}

module.exports = Card;