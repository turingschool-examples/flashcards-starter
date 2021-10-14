class Card {
  constructor(data) {
    this.id = data.id;
    this.question = data.question;
    this.answers = data.answers;
    this.correctAnswer = data.correctAnswer;
  }
}

module.exports = Card;
