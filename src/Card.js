const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const deck = require('./Deck');

class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

}

module.exports = Card;