class Card {
  constructor(id, question, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = [ 'object', 'array', 'function' ];
    this.correctAnswer = this.answers[0];
  }
}

module.exports = Card;
