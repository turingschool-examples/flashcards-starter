class Card {
  constructor(id, question, possAnswers, rightAnswer) {
    this.question = question;
    this.answers = possAnswers;
    this.correctAnswer = rightAnswer;
  }
}

module.exports = Card;
