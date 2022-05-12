class Card {
  constructor(id,question = [], possibleAnswer) {
    this.id = id;
    this.question = question;
    this.possibleAnswer = possibleAnswer;
    this.answers = ['object', 'array', 'function']
    this.correctAnswer = 'object';
  }
}
module.exports = Card;
