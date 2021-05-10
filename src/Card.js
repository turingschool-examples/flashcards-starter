const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
  constructor(id, question, possibleAnswers, answer) {
  this.id = id;
  this.question = question;
  this.answers = possibleAnswers;
  this.correctAnswer = answer;
  }
}

module.exports = Card;