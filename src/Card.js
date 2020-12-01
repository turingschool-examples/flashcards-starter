const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id || Date.now();
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;