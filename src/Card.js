const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
  constructor(id, question, answers, right) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = right;
  }
}

module.exports = Card;