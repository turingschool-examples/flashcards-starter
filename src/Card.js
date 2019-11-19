class Card {
  constructor(id, question, answers, correctAnswer) {
    this.is = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
module.exports = Card