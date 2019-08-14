class Card {
  constructor(obj) {
    this.id = obj.id;
    this.question = obj.question;
    this.answers = obj.answers;
    this.correctAnswer = obj.correctAnswer;
  }
}

module.exports = Card;