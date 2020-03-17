class Card {
  constructor(id, question, answers, rightAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = rightAnswer;
  }
}

module.exports = Card;
