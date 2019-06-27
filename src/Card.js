// const data = require('./data')

class Card {
  constructor(id, question, answers, string) {
    this.id = id; 
    this.question = question;
    this.answers = answers || [];
    this.correctAnswer = string;

  }
}






module.exports = Card;