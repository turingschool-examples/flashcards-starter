class Card {
  constructor(details) {
    this.id = details.id;
    this.question = details.question;
    this.answers = details.answers;
    this.correctAnswer = details.correctAnswer;

  }
}

module.exports = Card;
